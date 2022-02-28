/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */



	let firstWord = document.getElementById('first-word').value;
	let secondWord = document.getElementById('second-word').value;
	let outputWord = document.getElementById('output-word');


	if (firstWord.length  <  secondWord.length){
		outputWord.innerHTML = '';
		outputWord.append('La parola più corta è: ' + firstWord + ', quella più lunga: ' + secondWord ) ;
	} else if ( secondWord.length < firstWord.length){
		outputWord.innerHTML = '';
		outputWord.append('La parola più corta è: ' + secondWord + ', quella più lunga: ' + firstWord);
	} else {
		outputWord.append('La lunghezza delle parole è la stessa');
	}




