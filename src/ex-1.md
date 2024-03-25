### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.


1. Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng

Typescript är dock ett programmeringsspråk som är baserat på Javascript och bygger på Javascript. Andra språk som tidigare misslyckats ersätta JavaScript så omfamnar TypeScript sin föregångare och lägger till funktioner istället för att totalt revidera språket och dess syntax.

2. Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng

Fördelen:
Förbättrad Felsökning: Statisk typning gör det möjligt att upptäcka fel tidigt, ofta vid kompilering.
Kodkvalitet: Funktioner som interfaces och generics hjälper till att skriva mer robust och förutsägbar kod.
Verktygsstöd: Starkt stöd i IDE:er för kodkomplettering, refaktorering och felsökning.
Kodläsbarhet: Typer och gränssnitt gör koden mer självbeskrivande, vilket underlättar underhåll och onboarding av nya utvecklare.
Flexibilitet: TypeScript är en överbyggnad på JavaScript, så all JS-kod är redan giltig TS-kod. Detta gör det enkelt att införa TypeScript i befintliga projekt

Nackdelen:
Inlärningskurva: Det kan ta tid att vänja sig vid statisk typning och andra TS-specifika funktioner.
Kompilering: TS måste kompileras till JS, vilket är ett extra steg i utvecklingsprocessen.
Typdefinitioner: För tredjepartsbibliotek som inte är skrivna i TypeScript kan du behöva externa typdefinitioner, vilket kan vara ofullständiga eller föråldrade.
Prestanda: Kompileringen kan vara tidskrävande för mycket stora projekt

3. Initiera ett vanilla TS-projekt så att du kan kompilera 
 Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng