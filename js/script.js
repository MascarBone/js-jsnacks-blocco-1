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

// let somma = 0;
// let i = 1;
// while ( i <= 10)
// {
//     somma += i;
//     i++;
// }

// //Il contatore una volta usciti dal ciclo raggiungo il numero di cifre sommate + 1
// //Facendo i-- il contatore rappresenta il numero preciso di cifre sommate

// i--;

// console.log("Totale :" + somma);
// console.log("Media :" + (somma / i));









// ##### Snack N6 #####

// Crea un array vuoto.
// Chiedi all'utente di inserire cinque parole.
// Quando sono scritte tutte in maiuscolo stampa un alert,
// altrimenti inseriscile nell'array.

// let listaParole = [];
// let input;

// for (let i = 0; i < 5; i++)
// {
//     input = prompt("Inserire una parola");
//     if (input == input.toUpperCase())
//     {
//         alert("La parola inserita è tutta in maiuscolo, si prega di abbassare il tono");
//     }else
//     {        
//         listaParole.push(input);
//     }
// }

// console.log(listaParole);









// ##### Snack N7 #####
// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// let somma = 0;
// let j=0;

// for (let i = 0; i < 5; i++)
// {
//     somma += parseInt(prompt("Inserisci un numero"));
// }

// while (j < 5)
// {
//     somma += parseInt(prompt("Inserisci un numero"));
//     j++;
// }

// console.log(somma);









// ##### Snack N8 #####
// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
// una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
// Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.

// let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

// let listaGatsby = [];
// let indiceNomi = 0;
// let indiceCognomi = 0;

// for (let i = 0; i < 8; i++)
// {
//     indiceNomi = Math.floor(Math.random() * listaNomi.length);
//     indiceCognomi = Math.floor(Math.random() * listaCognomi.length);

//     listaGatsby.push(listaCognomi[indiceCognomi] + " " + listaNomi[indiceNomi]);
// }

// listaGatsby.sort();

// console.log(listaGatsby);

// // Aggiunta di un <ul> per questo Snack
// document.getElementById('creazione').innerHTML = '<ul id="listaInvitati"></ul>';

// for (let j = 0; j < listaGatsby.length; j++)
// {
//     document.getElementById('listaInvitati').innerHTML += '<li>' + listaGatsby[j] + '</li>';
// }









// ##### Snack N9 #####
// A)
// Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
// Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
// tanti quanti l'altro.

// B)
// Mostriamo in HTML le due liste in parallelo

// C)
// Inserisci una terza lista, che unisca le due precedenti e alle quali rimuovi gli elementi con indice multiplo di 3 e di 4

let listaPrima = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let listaSeconda = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];

let listaTerza = [];

// Aggiunta di una row e delle <ul> per questo Snack
document.getElementById('creazione').innerHTML =    '<div class="row">' +
                                                        '<div class="col-4">' +
                                                            '<ul id="listaPrima"></ul>' +
                                                        '</div>' +
                                                        '<div class="col-4">' +
                                                            '<ul id="listaSeconda"></ul>' +
                                                        '</div>' +
                                                        '<div class="col-4">' +
                                                            '<ul id="listaTerza"></ul>' +
                                                        '</div>' +
                                                    '</div>';


while (listaPrima.length != listaSeconda.length)
{
    if (listaPrima.length < listaSeconda.length)
    {
        listaPrima.push(prompt("Inserisci un elemento"));
        // console.log("Inserito un valore if" + index);
    } else {
        listaSeconda.push(prompt("Inserisci un elemento"));
        // console.log("Inserito un valore else" + index);
    }
}

for (let i = 0; i < listaPrima.length; i++)
{
    document.getElementById('listaPrima').innerHTML += '<li>' + listaPrima[i] + '</li>';
    document.getElementById('listaSeconda').innerHTML += '<li>' + listaSeconda[i] + '</li>';

}
console.log(listaPrima.length);
console.log(listaSeconda.length);


//
// C)
// 
listaTerza = listaPrima.concat(listaSeconda);
console.log(listaTerza);
console.log(listaTerza.length);

for (let j = listaTerza.length; j > 0; j--)
{
    if ( j != 0 && (j%3 == 0 || j%4 == 0) )
    {
        listaTerza.splice(j,1);
        console.log('rimosso' + j);
    }
}

console.log(listaTerza);
console.log(listaTerza.length);

for (let z = 0; z < listaTerza.length; z++)
{
    document.getElementById('listaTerza').innerHTML += '<li>' + listaTerza[z] + '</li>';

}