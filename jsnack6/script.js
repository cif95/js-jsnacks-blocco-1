/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */
// recupero dal DOM l'elemento dove mostro l'output della somma
const sumOutput = document.getElementById('sum-output');

// chiedo all'utente di inserire un numero di 7 cifre
const userNumber = prompt('Inserisci un numero di 7 cifre');

// dichiaro la variabile somma
let sum = 0 ;

// creo un'istruzione condizionale : 
if ( userNumber.length != 7 ) { // se il numero inserito dall'utente non è di 7 cifre, allora..
	sumOutput.append('Non hai inserito un numero di 7 cifre');
} else { // altrimenti creo un ciclo dove estraggo ogni cifra dal numero e la aggiungo alla somma ad ogni giro del ciclo
	for(let i = 0 ; i < userNumber.length; i++){
		sum += parseInt(userNumber.charAt(i)); // trasformo il carattere in una cifra intera ( il prompt restituisce una stringa )
	} // mostro l'output della somma
	sumOutput.append('La somma delle cifre di ' + userNumber + ' è: '  + sum);
}









