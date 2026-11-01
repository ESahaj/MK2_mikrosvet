# Spottyho mikrosvět

Kvíz pro děti od 7 let: 10 barevných hádanek, vždy tři možnosti, opakované pokusy bez trestu, ilustrace makrosvěta a anglické slovíčko s českým překladem. Odhalení nahradí zadání přímo na stejném místě. Přečtení otázky závisí na českém hlasu v zařízení.

## Spuštění a GitHub Pages
1. Rozbalte ZIP a pro místní vyzkoušení otevřete index.html.
2. Obsah ZIPu nahrajte do kořenové složky repozitáře.
3. V Settings → Pages zvolte Deploy from a branch, větev main a složku / (root), poté Save.

Bez instalace a sestavení, bez registrace a sběru údajů. Relativní cesty fungují i pod názvem repozitáře.

## Obsah a původ obrázků
| Hádanka | Dodaný soubor | Určení |
| --- | --- | --- |
| Suchý zip | PKA749501_mikro6.jpg | Zdrojový kvíz iDNES |
| Jahoda | PKA749501_mikro17.jpg | Potvrzeno uživatelkou |
| Pyl | getthumbnail.aspx.webp | Popis VTM / Tescan |
| Cukr | PKA749501_mikro21.jpg | Bílé a hnědé kostky, potvrzeno uživatelkou |
| List | img-07.jpg | Průduch listu; bez určení druhu rostliny |
| Zubní nit | PKA749501_mikro18.jpg | Potvrzeno uživatelkou |
| Květák | PKA74950e_profimedia_0081775438.jpg | Potvrzeno uživatelkou |
| Hlavička zápalky | PKA749501_mikro19.jpg | Potvrzeno uživatelkou |
| Křídlo mouchy | getthumbnail.aspx.jpeg | Popis VTM / Tescan |
| Plíseň na chlebu | getthumbnail.aspx-2.jpeg | Popis VTM / Stefan Diller |

Makrosvět tvoří vlastní SVG ilustrace, nejde o fotografie stejného exempláře. Barvy snímků z elektronového mikroskopu mohou být doplněné uměle. Spotty je z dodaných projektových podkladů.

Mikrofotografie byly dodány uživatelkou a nejsou součástí licence k novému kódu. Před veřejným nasazením ověřte možnost zveřejnit převzaté fotografie; uvedení zdroje samo nepředstavuje licenci. Web nebyl publikován.

Zdrojové články:
- https://vtm.zive.cz/clanky/uhadnete-co-je-pod-lupou-vyfotili-jsme-par-veci-ktere-musi-poznat-kazdy-geek/sc-870-a-209552/default.aspx
- https://www.idnes.cz/technet/nadhera-i-hnus-jak-obstojite-na-vylete-do-mikrosveta.Q180711_184634_technet_pka

## Úpravy
Otázky jsou na začátku quiz.js. correct je pořadí správné odpovědi od nuly. english a czech určují dvojici slovíček. Obrázky jsou v assets/. Počet otázek a postup se přizpůsobují automaticky.
