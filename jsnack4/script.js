/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */


const partyGuestList = ['viviana', 'roberto', 'francesco', 'vera', 'silvia', 'valentina'];
const userName = prompt('Inserisci il tuo nome').toLowerCase().trim();
const accessOutput = document.getElementById('access-output');
let isGuest = false;


for ( let i = 0; i < partyGuestList.length ; i++) {
	if ( userName === partyGuestList[i]) {
		isGuest = true;
	} 
}

if ( isGuest ) {
	accessOutput.append('Puoi partecipare')
} else {
	accessOutput.append('Non puoi partecipare!');
}
