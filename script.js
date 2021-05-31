console.log("Opdracht IF, ELSE en ELSE IF");

//Maak een const genaamd age en geef het een waarde van het type number
let age = 46;

//Schrijf een if statement die controleert of de age van de persoon (de input) groter is dan of gelijk aan 18 jaar.
//Console.log() een bericht naar de console wanneer de persoon naar binnen mag.
//Console.log() een ander bericht wanneer de persoon te jong is en vriendelijk wordt verzocht buiten te blijven
//Schrijf een if statement die controleert of de input waar is of niet waar is.
if (age > 18){
    console.log("Jij bent ouder dan 18 en mag naar binnen.");

} else {
    console.log("Jij bent jonger dan 18 en mag niet naar binnen. We verzoeken je om buiten te blijven. ");
}


//Draai je programma in node, zoals je hebt geleerd.
//Probeer een aantal variabelen als input (de leeftijd van de persoon aan de deur). Werkt je code?
//Ja de code werkt.

//Naast de leeftijdsgrens, heb je ook een ladiesnight. 
//Voor de kaartverkoop van het feest, moet er natuurlijk online gecontroleerd worden over de persoon die de tickets koopt aangegeven heeft een vrouw te zijn.
//Schrijf een nieuwe const genaamd isFemale die als waarde een boolean (true/false) krijgt.

let isFemale = true;
if (isFemale) {
    console.log ("Jij bent een vrouw en mag naar de Ladiesnight.")
} else {
    console.log ("Jij bent een man en mag niet naar de Ladiesnight.")
}

//Als kroegbaas vind je het ook belangrijk dat de mensen veilig thuiskomen. Zeker als ze natuurlijk een glaasje hebben gedronken.
//Schrijf een nieuwe const genaamd driverStatus met de waarde 'bob'.

let driverStatus = "bob";

//Schrijft een if statement die controleert of de input van de driverStatus gelijk is aan 'bob'.
//Console.log een bericht als de bestuurder de status van bob heeft en mag rijden.
//Console.log een bericht als de bestuurder geen bob is en dus niet mag rijden.

if (driverStatus = "bob") {
 console.log ("Jij bent de Bob en mag rijden.");
} else {
    console.log ("Jij hebt gedronken en mag niet rijden.")
}