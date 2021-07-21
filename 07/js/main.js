/*
TODO: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];

	if (element % 2 != 0) {
		sum += element;
	}
}

console.log("La somma dei numeri dispari e': " + sum);
