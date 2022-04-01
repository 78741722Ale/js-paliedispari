// Consegna pari o dispari

/* 

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

/// L’utente sceglie pari o dispari
const userChoice = prompt("Pari o dispari ?")
// L’utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
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

/// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
console.log("Prima Funzione - PC Number");
function pc_Number() {
    // Variabile random del PC
    let pcNumber = parseInt(Math.floor(Math.random() * 4) + 1)
    // Valore di ritorno
    return pcNumber
}
// Verifico anche fuori da funzione
let pcNumber = pc_Number()
console.log(pcNumber);

// Sommiamo i due numeri (ancora dentro a una funzione)
console.log("Seconda Funzione - Somma tra numeri");
function sumNumbers(userNumber, pcNumber) {
    // Variabile somma 
    let sum = parseInt(userNumber + pcNumber);
    // Valore di ritorno
    return sum;
}

// Dichiaro la somma fuori dalla funzione
let sum = sumNumbers(userNumber, pcNumber);
console.log(sum);

