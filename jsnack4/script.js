/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */
/* Creo un array con la lista degli invitati*/
const partyGuestList = ['viviana', 'roberto', 'francesco', 'vera', 'silvia', 'valentina'];
/* Chiedo all'utente il suo nome con un prompt,
	salvo il dato in una variabile */
const userName = prompt('Inserisci il tuo nome').toLowerCase().trim();
/* Recupero l'elemento DOM dove mostrare l'output */
const accessOutput = document.getElementById('access-output');
/* Creo una variabile "flag" */ 
let isGuest = false;

/* Creo due elementi immagine */
const imgFalse = document.createElement("img");
imgFalse.src = "notOnList.jpg";

const imgTrue = document.createElement("img");
imgTrue.src = "gotIt.jpg";

/* Creo un'istruzione condizionale */
for ( let i = 0; i < partyGuestList.length ; i++) {
	if ( userName === partyGuestList[i]) { // se il nome utente compare nella lista, la variabile flag è true
		isGuest = true;
	} 
}

/* Creo un'istruzione condizionale */
if ( isGuest ) {  // se la variabile flag è true ( l'utente rientra nella lista), allora..
	imgTrue.classList.add('d-block', 'mx-auto', 'py-5');
	accessOutput.append('Puoi partecipare!', imgTrue);
} else { // altrimenti..
	imgFalse.classList.add('d-block', 'mx-auto', 'py-5');
	accessOutput.append('Non puoi partecipare!', imgFalse);
}
