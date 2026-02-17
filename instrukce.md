Text pro soubor instrukce.md 
(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)
Pro napojení dadabáze z Notionu použiješ předpřipravené .php a další soubory ze složky api a _private

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
Šířku celého webu dej na 85% obrazovky
Jasné oddělení sekcí a obsahových celků
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i> a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
Brand barvy (HEX): 
   - primární: #01a1db
- doplňková: #01739d
   - konverzní: #ffea6c
   - pozadí: #ffffff
   - text: [#333333]
- pro watermark použij 15% průhlednost primární barvy

**Fonty**
Brandový font Proba Pro ve složce Fonty

**Struktura**
Jednostránkový web
Položky menu: 
Spolupráce
Kdo jsem
Poslechněte si
Reference
Akce
Kontakt

**Další prvky na webu**
v sekci akce výpis z Notion databáze plánovaných akcí,  použiješ předpřipravené .php a další soubory ze složky api a _private. Pokud nebude v databázi nic ke zobrazení, vypíšeš větu. “Aktuálně nemám naplánované žádné akce.”

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 

Design style:
– Lots of whitespace
– Large bold typography
– Soft rounded corners (16px radius)
– Subtle shadows
– Friendly but professional
– Not corporate
– Not SaaS dashboard
– No heavy gradients except hero
– Clean grid layout (12 column)
– Modern UI 
– Energetic and funny but minimal
použij v pozadí nějaké sekce vodoznakově logo LV_logo_vector_modrá.svg

Pro reference použij horizontal Testimonial Slider s 3 profily vedle sebe kde se zobrazí jen úvodní věta a více textu je pak na rozkliknutí šipkou dolu

V sekci Kde mě můžete vidět? dej náhledové fotky z videí, na které je odkaz.

Menu položky budou bílým textem před scrollem a černým na bílé liště u fixovaného menu. Vogo v menu bude výrazné, po scrollu se změní na primární modrou barvu

Tlačítka také 16px radius

**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce Obrazky

**texty**
Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej. 
nebo 
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 

LV_logo_vector_bila.svg

Menu:
Spolupráce
Kdo jsem
Poslechněte si
Reference
Akce
Kontakt

Hero sekce:
LinkedIN Lidsky. Od profilu až po cíle.
Staňte se hvězdou svého obsahu.
Připoutejte se, začínáme.
Pojďme spolupracovat

Lukáš Vyskočil.png

Osobně neznám nikoho, kdo uspěl na Linkedin tím, že ovládl algoritmus. 🙂
🔵 Jak tvořit obsah, aby Vás i i Vaše čtenáře bavil a měl hodnotu
🟡 Jak tvořit obsah, který dává smysl a má výsledky 
⚪ Jak tvořit obsah a nezaprodat svou duši

Jaká forma je pro vás nej? Vyberte si. Těším se.
Laskavá konzultace.svg
Laskavá konzultace

Jeden na laskavce, laskavec jen pro vás.
 -  jak vyladit profil
analýza vašeho obsahu
jak budovat sít spojení
vaše téma okolo linkedin

cena 3000 hod
Laskavý balíček.svg
Laskavý balíček

Linkedin Lidsky kompletní verze.
Od profilu po cíle
Od obsahu po algoritmus
Od budování sítě po vás

10+1 hodina se mnou.

Napište si o více informací tu…

cena: 20 000 kč
Laskavé firemní školení.svg
Laskavé firemní školení

Dejte vašim lidem zážitek. Cíl je, aby to lidi bavilo, cíl je nadchnout. Nejde o to, kolik budou znát pouček, jde o to, jak moc budou chtít začít tvořit. Ty poučky dáme také. 🙂

Půl den (3,5 hod):  15 000 (max 9 lidí)
Celý den (7 hod): 25 000 (max 9 lidí)
Série(3 a více) : 20 000 školení den

Aktuálě plánované

Pojďme spoluprácovat

A na co se můžete těšit vy?
1.svg
1 - Laskavě si zavoláme
Ať zjistíme, zda se máme rádi. Jo a taky zda umím pomoci. 
2.svg
2 - Chci vědět všechno
O Vás, vašem oboru, cílech a LI, očekávání od naší spolupráce. Bez toho se nemůžeme pustit do práce.
3.svg
3 - Můj cíl je se vás zbavit
To nezní laskavě, ovšem je to pravda. Nepotřebuji vám prodat třetí stejný kurz s jiným názvem. Můj cíl je, abyste uměli tvořit beze mne.
4.svg
4 - Bude legrace
Když už nic, musí nás to bavit, jsem rozhodně nejvtipnější průvodce na českém LinkedInu

Kdo je laskavý chachar?
Stále spíše CYP než GURU.
Obyčejný kluk kterého nikdo neznal, je stále obyčejným klukem, kterého pár lidí zná, hlavně na LinkedIN. 
Moje nejsilnější stránka je, že rozumím lidem.
Měním vás, nikoliv váš obsah. Sázka?
Můj cíl je vás naučit se prezentovat tak, aby vás to bavilo.
Ano, hlavně vás. To je totiž za mne klíč.
Jsem Lukáš, těší mne. 
Dáte mi šanci?
Lukáš Vyskočil Laskavý Chachar.jpg

Pojďme spolupracovat

Kde mě můžete vidět?

Historicky první přednáška o Laskavosti. :-)
Lukáš Vyskočil - Buďme (k sobě) laskaví
https://www.youtube.com/watch?v=4jgxBL_rCL0
Barcamp Kolín 2025 - Lukáš Vyskočil: Buďme (k sobě) laskaví

Lukáš Vyskočil - Laskavý konzultant
https://www.youtube.com/watch?v=IfvuAvX_O0o

Podcast Hoří ti Interka má panenko, celý díl o tom, jak dělat LinkedIN Lidsky. :-)
Lukáš Vyskočil o LinkedInu
https://open.spotify.com/episode/0jcgcoBNXkDacT5syB84GM

Co o mně říkají?

Kristýna Mácha Svěráková.jpg
Kristýna Mácha Svěráková
 🟢 The Mother of Integrations
“Já si teď buduju na LI vlastní značku a ne jen, že už se toho nebojím, ale dostala jsem od Lukáše i spoustu rad k tomu jak správně psát a jaké vychytávky mi s tím můžou pomoct.” ⬇️

Lukáš o sobě říká, že je Laskavý Chachar. Uplně moc nevím, co znamená chachar, ale laskavý je skutečně moc.
Nejsem sice zrovna introvert, ale jít a otevřeně psát na sociální sítě pro mě bylo donedávna docela sci-fi. Lukáš mě ale tou změnou provedl takovým způsobem, že jsem si ani na chvilku připadala trapně. Já si teď buduju na LI vlastní značku a ne jen, že už se toho nebojím, ale dostala jsem od Lukáše i spoustu rad k tomu jak správně psát a jaké vychytávky mi s tím můžou pomoct.
Díky, Lukáši, za Tvou laskavost a za naší spolupráci :)!

Ivona Jogínka z domečku.jpg
Ivona Jogínka z domečku
 Lektorka jógy & pilates
“Díky němu jsem zpět, svým originálním způsobem. Propagace mě začala bavit, nesvazuje mě. A oslovuje mě čím dál víc klientů nejen z LinkedInl.” ⬇️

Lukáše jsem potkala ve chvíli, kdy jsem podnikání málem zabalila. Svoji práci lektorky jógy miluju, ale nedařilo se mi najít způsob propagace, který by byl v souladu s mým hodně přirozeným způsobem života. Nesnáším tlak a přetvářku a měla jsem pocit, že bez nich to snad už ani nejde.
Lukáš mě doslova okouzlil svými trefnými podněty a já ho požádala o konzultaci.
Šel naprosto k věci a přitom velmi laskavě a s obrovským pochopením nejen pro můj specifický business, ale i pro mě jako osobu. Nechal mě jít vlastním tempem a úžasně motivoval a podporoval.
Díky němu jsem zpět, svým originálním způsobem. Propagace mě začala bavit, nesvazuje mě. A oslovuje mě čím dál víc klientů nejen z LinkedIn.
Lukáši, díky a těším se na pokračování!

Tereza Vlašic.jpg
Tereza Vlašic
 Výroba prémiových ořechových krémů, past a náplní 
“✨ Je pro mě obrovskou ctí spolupracovat s Lukášem. Splnil přesně to, co slibuje – laskavě, ale naprosto objektivně vás vytáhne z vaší krabice a dokáže z vás dostat to nejlepší.” ⬇️

Není to ten typ, který udělá práci za vás. Naopak – naučí vás, jak svoji práci dělat správně, efektivně a s úplně novým rozhledem. Do spolupráce jsem šla s velkým očekáváním, ale dostala jsem mnohem víc. ❤️
Lukáš je člověk s obrovským srdcem a flexibilitou. Jen málokdo se dokáže přizpůsobit klientovi tak, že si s vámi dá dvouhodinový call od 22 hodin večer. Za to mu patří obrovské díky – jsem mu vděčná za podporu i za to nakopnutí, které mi dal.
Maximálně doporučuji všem, kteří chtějí posunout sebe i svou práci na úplně novou úroveň. 🌟

Jméno, co dělá
“Vybraná věta, 2…” ⬇️
Celý text.

Jméno, co dělá
“Vybraná věta, 2…” ⬇️
Celý text.

Jméno, co dělá
“Vybraná věta, 2…” ⬇️
Celý text.

“Vybraná věta, 2…” ⬇️
Jméno, co dělá
Celý text.

“Vybraná věta, 2…” ⬇️
Jméno, co dělá
Celý text.

“Vybraná věta, 2…” ⬇️
Jméno, co dělá
Celý text.

“Vybraná věta, 2…” ⬇️
Jméno, co dělá
Celý text.

Více referencí

Pojďme spolupracovat

Speciální laskavé menu jen pro vás.
Výpis akcí z Notion tabulky přes API

Nemáme se v síti?
Dupej to tam.
Lukáš Vyskočil
https://www.linkedin.com/in/lukasvyskocil/

V kruhu:
Lukáš Vyskočil profil.jpg
Včera bylo pozdě? Napište mi. Něco s tím uděláme.
lukas@laskavychachar.cz
Chcete začít zítra?

+420724006463
Lukáš Vyskočil
Těškovice 2, 747 64 Těškovice
IČO: 19389787
zapsaný v živnostenském rejstříku
Obchodní podmínky
Zásady zpracování osobních údajů
Zásady cookies
© Karolína Melínová • 2026
