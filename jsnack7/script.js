/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const randomNumbersArray = [ ];
let randomNumbersSum = 0;
let averageNumbers = 0;

for ( let i = 0; i < 10 ; i++) {
	randomNumbersArray.push(Math.floor(Math.random() * 100));
	randomNumbersSum += randomNumbersArray[i];
}

console.log(randomNumbersArray);
console.log(randomNumbersSum);
averageNumbers = randomNumbersSum / 10;
console.log(averageNumbers);








