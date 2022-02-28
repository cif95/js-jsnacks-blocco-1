/**
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */
// inizializzo una variabile vuota per salvare il numero che verrà inserito dall'utente ogni volta
let userNumber = '';

// inizializzo una variabile vuota per salvare la somma dei numeri che verranno inseriti dall'utente
let numberSum = 0 ;

// recupero l'elemento dom dove mostrerò l'output
const sumOuputElement = document.querySelector('h2#sum-output');
console.log(sumOuputElement);

// creo un ciclo for per chiedere 10 volte all'utente di inserire un numero
for ( let i = 0; i < 10; i++ ) {
	userNumber = parseInt(prompt('Inserisci un numero'));
	numberSum += userNumber; // aggiungo, ad ogni giro del ciclo, il numero inserito nella variabile somma
}

// mostro la somma nell'output
sumOuputElement.append(numberSum);

