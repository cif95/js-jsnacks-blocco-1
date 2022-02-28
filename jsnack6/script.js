/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */
const sumOutput = document.getElementById('sum-output');
const userNumber = prompt('Inserisci un numero di 7 cifre');
console.log(userNumber.length);
let sum = 0 ;

if ( userNumber.length != 7 ) {
	sumOutput.append('Non hai inserito un numero di 7 cifre');
} else {
	for(let i = 0 ; i < userNumber.length; i++){
		sum += parseInt(userNumber.charAt(i));
	}
	sumOutput.append('La somma delle cifre di ' + userNumber + ' è: '  + sum);
}









