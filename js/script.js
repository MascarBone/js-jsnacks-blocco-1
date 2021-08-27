// ##### Snack N1 #####
// L'utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.

let parolaPrima = prompt ("Inserici la PRIMA parola");
let parolaSeconda = prompt ("Inserisci la SECONDA parola");

if (parolaPrima.length > parolaSeconda.length)
{
    console.log("Le parole in ordine crescente :\n" + parolaPrima + "\n" + parolaSeconda);
}   
else if (parolaPrima.length < parolaSeconda.length)
{
    console.log("Le parole in ordine crescente :\n" + parolaSeconda + "\n" + parolaPrima);
}
else
{
    console.log("Le parole hanno la stessa lunghezza :\n" + parolaPrima + "\n" + parolaSeconda);
}









