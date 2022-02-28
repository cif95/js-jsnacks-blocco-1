/**
 * L'utente inserisce due numeri in successione, con due prompt.
   Il software stampa il maggiore.
 */

const userFirstNumber = parseInt(prompt('Inserisci un numero'));
const userSecondNumber = parseInt(prompt('Inserisci un altro numero'));

let outputNumber = document.getElementById('output-number');

if ( userFirstNumber === userSecondNumber) {
	console.log('i numeri sono uguali');
}
else if ( userFirstNumber > userSecondNumber) {
	console.log (userFirstNumber);
	outputNumber.append(userFirstNumber);
} else {
	console.log(userSecondNumber);
	outputNumber.append(userSecondNumber);
}