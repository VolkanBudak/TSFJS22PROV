### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Generics är dock funktioner som tillåter oss att skicka in olika sorters av data och skapa återanvändbar kod som hanterar olika inmatningar. De kan även lägga in placeholders types som då byts ut när koden utförds.

Generics ger ett sätt att skapa återanvändbara komponenter samtidigt som typkontroller, vilket gör att du kan skriva mer flexibel och underhållbar kod. Any type, åt andra sidan, är ett sätt att välja bort TypeScripts typsystem, vilket i huvudsak säger åt kompilatorn att tillåta ett värde att vara av vilken typ som helst.

Skillnaden är ju dock att du använder Generics när du bygger komponenter som kan fungera med en mängd olika typer men som fortfarande behöver behålla typsäkerheten. Medans Any när du behöver komma runt typkontroll, till exempel under gradvis migrering från JavaScript till TypeScript eller hantera komplexa tredjepartsbibliotek.
