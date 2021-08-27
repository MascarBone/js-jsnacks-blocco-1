// ##### Snack N1 #####
// L'utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.

// let parolaPrima = prompt ("Inserici la PRIMA parola");
// let parolaSeconda = prompt ("Inserisci la SECONDA parola");

// if (parolaPrima.length > parolaSeconda.length)
// {
//     console.log("Le parole in ordine crescente :\n" + parolaPrima + "\n" + parolaSeconda);
// }   
// else if (parolaPrima.length < parolaSeconda.length)
// {
//     console.log("Le parole in ordine crescente :\n" + parolaSeconda + "\n" + parolaPrima);
// }
// else
// {
//     console.log("Le parole hanno la stessa lunghezza :\n" + parolaPrima + "\n" + parolaSeconda);
// }









// ##### Snack N2 #####
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. 

// let input = 0;
// let numero = 0;

// for (let i = 0; i < 10; i++)
// {       
//     console.log(numero);
//     do
//     {
//         input = parseInt(prompt("Inserisci un valore numerico"));
//         console.log(input);
//         if (isNaN(input))
//         {
//             alert("IL VALORE INSERITO NON E' UN NUMERO")
//         }
//     }while (isNaN(input))  

//     numero += input;
// }

// console.log(numero);









// ##### Snack N3 #####
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

// array contente la lista degli invitati
// const listaInvitati = ["Antonio", "Percival", "Charlotte", "Eden", "Clark", "Stew"];

// let invito = prompt("Inserisci il tuo nome per verificare l'ingresso");
// let pass = false;

// for (let i = 0; i < listaInvitati.length; i++)
// {
//     if (listaInvitati[i] == invito)
//     {
//         pass = true;
//     }
// }

// if (pass)
//     {
//         console.log("Il tuo nome è stato verificato, benvenuto");
//     }else
//     {
//         console.log("Mi dispiace, ma il tuo nome non è presente tra gli invitati");
//     }









// ##### Snack N4 #####
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// let listaNumeri = [];
// let input = null;

// for (let i = 0; i < 6; i++)
// {
//     input = prompt("Inserisci un numero");
    
//     if (input % 2 != 0)
//     {
//         listaNumeri.push(input);
//     }
// }

// console.log(listaNumeri);









// ##### Snack N5 #####
// Calcola la somma e la media dei primi 10 numeri

let somma = 0;
let i = 1;
while ( i <= 10)
{
    somma += i;
    i++;
}

//Il contatore una volta usciti dal ciclo raggiungo il numero di cifre sommate + 1
//Facendo i-- il contatore rappresenta il numero preciso di cifre sommate

i--;

console.log("Totale :" + somma);
console.log("Media :" + (somma / i));
