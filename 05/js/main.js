/*
TODO: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/

var userInput = parseInt(prompt('Inserisci un numero'));

if (userInput % 2 == 0) {
	console.log(userInput);
} else {
	console.log(userInput + 1);
}
