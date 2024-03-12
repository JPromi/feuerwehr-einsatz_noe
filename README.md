
# Feuerwehr Einsatz - Niederösterreich

Dieses Projekt ladet die Daten von Wastl. Es werden alle Aktuellen Einsätze ausgegeben, es kann nach Bezirk und Ort gefiltert werden.

## Installation
1. node installieren, https://nodejs.org/
2. packages installieren, `npm install`
3. `config.json` bearbeiten

## config.json

### Bezirk ID
Wenn du deine Bezirks ID von Wastl nicht kennst, kannst du unter https://infoscreen.florian10.info/OWS/wastlMobile/getMainData.ashx -> ["Bezirke"] deinen Bezirk suchen, die variable "k" ist dann die Bezirks ID, oder du siehst ganz unten in der Liste nach

### City
Der Ort wird so geschrieben wie es in Grisu Angezeigt wird z.B "Mödling", "Perchtoldsdorf", "St. Pölten"

### updateIntervall
Der updateIntervall gibt an in welchem Abstand die Daten neu geladen werden, der mindestabstand sollte 20 Sekundne sein.

## Funktion
Wenn du das Projekt in ein Anderes Projekt Einbinden willst, musst du aus `app.js` folgenden Code entfernen und in dein Projekt einfügen
```
const myApp = new App();
myApp.run();
```
\
\
Viel Spaß bei der Verwendung
# Bezirke
| ID   | Bezirk              |
|------|---------------------|
| 01   | BAZ Amstetten       |
| 02   | BAZ Baden           |
| 03   | BAZ Bruck/Leitha    |
| 04   | BAZ Gänserndorf     |
| 05   | BAZ Gmünd           |
| 061  | AAZ Klosterneuburg  |
| 062  | AAZ Purkersdorf     |
| 063  | AAZ Schwechat       |
| 07   | BAZ Hollabrunn      |
| 08   | BAZ Horn            |
| 09   | BAZ Stockerau       |
| 10   | BAZ Krems/Donau     |
| 11   | BAZ Lilienfeld      |
| 12   | BAZ Melk            |
| 13   | BAZ Mistelbach      |
| 14   | BAZ Mödling         |
| 15   | BAZ Neunkirchen     |
| 17   | BAZ St. Pölten      |
| 18   | BAZ Scheibbs        |
| 19   | BAZ Tulln           |
| 20   | BAZ Waidhofen/T.    |
| 21   | BAZ Wr. Neustadt    |
| 22   | BAZ Zwettl          |