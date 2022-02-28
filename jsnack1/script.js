/**
 * L'utente inserisce due numeri in successione, con due prompt.
   Il software stampa il maggiore.
 */

/* chiedo all'utente di inserire un numero attraverso un prompt,
	inizializzo una variabile assegnandole il dato inserito dall'utente*/
const userFirstNumber = parseInt(prompt('Inserisci un numero'));
/* chiedo all'utente di inserire un altro numero attraverso un prompt,
	inizializzo una variabile assegnandole il dato inserito dall'utente*/
const userSecondNumber = parseInt(prompt('Inserisci un altro numero'));

/* recupero l'elemento DOM dove inserisco l'output e lo assegno ad una nuova variabile*/
let outputNumber = document.getElementById('output-number');

/* creo un'istruzione condizionale */
if ( userFirstNumber === userSecondNumber) { //se i numeri sono uguali, allora
	outputNumber.append('i numeri sono uguali!');
}
else if ( userFirstNumber > userSecondNumber) { // se il primo numero è maggiore del secondo, allroa
	console.log (userFirstNumber);
	outputNumber.append(userFirstNumber);
} else { // altrimenti .. 
	console.log(userSecondNumber);
	outputNumber.append(userSecondNumber);
}