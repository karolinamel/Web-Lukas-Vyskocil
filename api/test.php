<?php
header("Content-Type: text/plain; charset=utf-8");

echo "PHP OK\n";
echo "curl_init exists: " . (function_exists("curl_init") ? "YES" : "NO") . "\n";
