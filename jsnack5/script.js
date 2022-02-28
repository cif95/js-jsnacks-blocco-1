/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */
// creo un array vuoto
const numberList = [];

// recupero dal dom l'elemento dove mostrerò l'output
const oddOutput = document.getElementById('odd-numbers-output');

// creo un ciclo for per chiedere, attraverso un prompt, di inserire un numero 6 volte
for ( let i = 0; i < 6 ; i++) {
	let userNumber = parseInt(prompt('Inserisci un numero'));
	// creo un'istruzione condizionale
	if ( ( userNumber % 2 === 1 ) && (!isNaN(userNumber)) ){ // se il numero inserito è dispari ed è un numero, allora..
		numberList.push(userNumber); // ..allora aggiungo il numero all'array
	}
}

// mostro l'output dell'array
oddOutput.append(numberList);