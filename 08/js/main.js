/*
TODO: Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

var firstArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var secondArray = ['1', '2', '3', '4', '5'];

console.log('Il primo array ha: ' + firstArray.length + ' elementi');
console.log('Il secondo array ha: ' + secondArray.length + ' elementi');

if (firstArray.length > secondArray.length) {
	do {
		secondArray.push(' ');
	} while (firstArray.length > secondArray.length);
} else if (secondArray.length > firstArray.length) {
	do {
		firstArray.push(' ');
	} while (secondArray.length > firstArray.length);
} else {
	console.log('Gli array hanno entrambi ' + firstArray.length + ' elementi al loro interno.');
}

console.log('Il primo array ha adesso: ' + firstArray.length + ' elementi');
console.log('Il secondo array ha adesso: ' + secondArray.length + ' elementi');
