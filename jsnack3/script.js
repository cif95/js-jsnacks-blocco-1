/**
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */


let userNumber = '';
let numberSum = 0 ;
const sumOuputElement = document.querySelector('h2#sum-output');
console.log(sumOuputElement);


for ( let i = 0; i < 10; i++ ) {
	userNumber = parseInt(prompt('Inserisci un numero'));
	numberSum += userNumber;	
}

sumOuputElement.append(numberSum);

