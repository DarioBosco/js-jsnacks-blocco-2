/*
TODO: Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

var firstArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var secondArray = ['1', '2', '3', '4', '5'];

console.log('Il primo array ha: ' + firstArray.length + ' elementi');
console.log('Il secondo array ha: ' + secondArray.length + ' elementi');

while (firstArray.length > secondArray.length) {
	secondArray.push(' ');
	//console.log('Il secondo array ha adesso: ' + secondArray.length + ' elementi');
}

while (secondArray.length > firstArray.length) {
	firstArray.push(' ');
	//console.log('Il primo array ha adesso: ' + firstArray.length + ' elementi');
}

if (firstArray.length == secondArray.length) {
	console.log('Gli array hanno entrambi ' + firstArray.length + ' elementi al loro interno.');
}
