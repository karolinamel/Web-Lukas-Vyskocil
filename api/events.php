<?php
/**
 * Konfigurace a zabezpečení
 */
header("Content-Type: application/json; charset=utf-8");
// ZMĚŇ NA SVOU DOMÉNU (např. https://moje-domena.cz) pro maximální bezpečí
header("Access-Control-Allow-Origin: *"); 

require_once __DIR__ . "/../_private/notion-config.php";

// Nastavení cache
$cacheFile = __DIR__ . "/notion_cache.json";
$cacheTime = 600; // 10 minut v sekundách

// 1. Kontrola, zda máme čerstvou cache
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    echo file_get_contents($cacheFile);
    exit;
}

/**
 * Pokud cache neexistuje nebo vypršela, taháme data z Notionu
 */
$token = NOTION_TOKEN;
$databaseId = NOTION_DATABASE_ID;
$url = "https://api.notion.com/v1/databases/" . $databaseId . "/query";

$payload = [
    "page_size" => 30,
    "filter" => [
        "property" => "Show",
        "checkbox" => [ "equals" => true ]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Timeout po 10s, aby web nevisel
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $token,
    "Notion-Version: 2022-06-28",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Pokud Notion selže, zkusíme vrátit aspoň starou cache (pokud existuje)
if ($httpCode !== 200 || !$response) {
    if (file_exists($cacheFile)) {
        echo file_get_contents($cacheFile);
        exit;
    }
    http_response_code(500);
    echo json_encode(["error" => "Data dočasně nedostupná"], JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode($response, true);
$events = [];

/**
 * Pomocné funkce pro bezpečné parsování
 */
function safe_text($prop) {
    if (empty($prop)) return "";
    $type = $prop["type"] ?? "";
    if ($type === "title") return $prop["title"][0]["plain_text"] ?? "";
    if ($type === "rich_text") return $prop["rich_text"][0]["plain_text"] ?? "";
    return "";
}

function safe_date($prop) {
    return $prop["date"]["start"] ?? "";
}

function safe_url($prop) {
    return $prop["url"] ?? "";
}

function safe_file($prop) {
    $file = $prop["files"][0] ?? null;
    if (!$file) return "";
    // Pozor: Notion interní linky vyprší po 1 hodině!
    return ($file["type"] === "external") ? ($file["external"]["url"] ?? "") : ($file["file"]["url"] ?? "");
}

// Zpracování výsledků
foreach (($data["results"] ?? []) as $page) {
    $props = $page["properties"] ?? [];
    $events[] = [
        "id" => $page["id"] ?? "",
        "name" => safe_text($props["Name"] ?? null),
        "date" => safe_date($props["Date"] ?? null),
        "place" => safe_text($props["Place"] ?? null),
        "description" => safe_text($props["Description"] ?? null),
        "button" => safe_text($props["Button"] ?? null),
        "link" => safe_url($props["Link"] ?? null),
        "image" => safe_file($props["Image"] ?? null),
    ];
}

$finalOutput = json_encode([
    "count" => count($events),
    "events" => $events,
    "updated" => date("Y-m-d H:i:s") // Vidíš v JSONu, kdy se data naposledy stáhla
], JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);

// Uložení do cache a výpis
file_put_contents($cacheFile, $finalOutput);
echo $finalOutput;