// Consegna pari o dispari

/* 

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// L’utente sceglie pari o dispari
const userChoice = prompt("Pari o dispari ?")
// L’utente inserisce un numero da 1 a 5
const userNumber = prompt("Scegli un numero da 1 a 5")
// Verifico che l'utente abbia inserito bene i dati
if (isNaN(`${userNumber}`)) {
    // E' effettivamente un valore numerico?
    alert("Inserisci valori numerici");
} else if (userNumber > 5) {
    // E' più grande di 5?
    alert("Inserisci un valore tra 1 e 5 !");
} else {
    console.log("Ok, può proseguire");
}


// Logghiamo in console per verificare i valori dichiarati
console.log(userChoice, userNumber);



