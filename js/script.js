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


let numero = 0;

for (let i = 0; i < 10; i++)
{            
    numero += parseInt(prompt("Inserisci un valore numerico"));
    // console.log(numero);
}

console.log(numero);