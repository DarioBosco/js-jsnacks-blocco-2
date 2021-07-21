/*
TODO: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
*/

var firstNames = ['Mario', 'Luigi', 'Giovanni', 'Paolo'];
var lastNames = ['Rossi', 'Bianchi', 'Verdi', 'Bosco'];
var iterations = 5;

for (let i = 0; i < iterations; i++) {
	var randomName = firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
	console.log(randomName);
}
