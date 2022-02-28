/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */
let firstWord = '';
let secondWord = '';

/* recupero l'elemento DOM dove inserisco l'output e lo assegno ad una nuova variabile*/
let outputWord = document.getElementById('output-word');

/* recupero l'elemento DOM button con cui resetto i dati */
let btnReset = document.querySelector('.btn.btn-danger');

/* recupero l'elemento DOM button con cui genero l'output*/
let btnCreateOutput = document.querySelector('.btn.btn-primary');


// aggiunto un evento click al bottone per creare l'output 
btnCreateOutput.addEventListener( 'click', 
function() {
	firstWord = document.getElementById('first-word').value;
	/* inizializzo una variabile assegnandole il dato inserito dall'utente nel secondo input text*/
	secondWord = document.getElementById('second-word').value;
	/* creo un'istruzione condizionale */
if (firstWord.length  <  secondWord.length){ // se la prima parola è più corta della seconda, allora..
	outputWord.innerHTML = '';
	outputWord.append('La parola più corta è: ' + firstWord + ', quella più lunga: ' + secondWord ) ;
} else if ( secondWord.length < firstWord.length){ // se la seconda parola è più corta della prima, allora..
	outputWord.innerHTML = '';
	outputWord.append('La parola più corta è: ' + secondWord + ', quella più lunga: ' + firstWord);
} else { // altrimenti..
	outputWord.append('La lunghezza delle parole è la stessa');
}
})

// aggiunto un evento click al bottone per resettare i dati
btnReset.addEventListener( 'click', 
function() {
	document.getElementById('first-word').value = '';
	document.getElementById('second-word').value = '';
	outputWord.innerHTML = '';
})




