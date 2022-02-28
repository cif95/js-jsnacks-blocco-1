/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */

const numberList = [];
const oddOutput = document.getElementById('odd-numbers-output');

for ( let i = 0; i < 6 ; i++) {
	let userNumber = parseInt(prompt('Inserisci un numero'));
	if ( ( userNumber % 2 === 1 ) && (!isNaN(userNumber)) ){
		numberList.push(userNumber);
	}
}

console.log(numberList);
oddOutput.append(numberList);