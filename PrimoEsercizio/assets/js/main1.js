// Consegna Palindromi

/* 
Chiedere all’utente di inserire una parola Creare una 
funzione per capire se la parola inserita è palindroma 
*/

console.log("Risoluzione senza funzione e o ciclo While/For :)");

// Chiedere all'utente di inserire una parola
let userWord = prompt("Inserisci una parola :)")
console.log(userWord);

// Analisi del problema - se la parola è palindroma significa che
// leggerla da DX a SX o da SX a DX non cambia nulla.

// Scompongo in vari caratteri la parola immessa dall'utente.
console.log("Parola suddivisa");
let userWordSplit = userWord.split("");
console.log(userWordSplit);

// La verifico al contrario, per far leggere alla condizione se
// sono uguali oppure no
console.log("Parola in reverse");
let userWord_Reverse = userWordSplit.reverse("")
console.log(userWord_Reverse);

// La parola ora è divisa in vari caratteri di array, la devo
// Riunire in modo tale da verificarne il contenuto
console.log("Parola in reverse Riunita");
let userWord_Reverse_Unite = userWord_Reverse.join("")
console.log(userWord_Reverse_Unite);

// Risoluzione del problema
// Ora attuo un confronto tra la parola 
// userWord_Reverse_Unite e la userWord iniziale

if (userWord_Reverse_Unite == userWord) {
    alert(`La parola ${userWord} è palindroma ed equivale a ${userWord_Reverse_Unite}`)
    console.log(userWord_Reverse_Unite, userWord);
} else {
    alert(`La parola ${userWord} è diversa e non equivale a ${userWord_Reverse_Unite}`)
    console.log(userWord_Reverse_Unite, userWord);
}

/**************** 
Soluzione con cicli e funzioni
****************/

console.log("Risoluzione con funzioni e cicli ");

// Chiedo all'utente una parola da inserire
let secondUserWord = prompt("Inserisci una seconda Parola");
console.log(secondUserWord);

// Dichiaro la variabile let con la funzione
/**
 * @let secondUserWord_Reverse_Unite - è la parola "secondUserWord" invertita
 */
let secondUserWord_Reverse_Unite = secondWordFunction(secondUserWord);
console.log(secondUserWord_Reverse_Unite);

function secondWordFunction(word) {

    //  Qui dichiaro nuovamente all'interno della funzione poichè dentro ad essa posso dichiararla come voglio
    let secondUserWord_Reverse_Unite = "";

    // Col solo word.length --> undefinedosso --> Quindi no
    // Con word.length + 1 --> undefinedundefinedosso --> Quindi no
    let i = word.length - 1;

    // Avvio il ciclo while, in questo caso la variabile index ha tale valore
    while (i >= 0) {
        // secondUserWord_Reverse_Unite equivale alla sua somma + la variabile word dichiarata all'avvio della funzione
        secondUserWord_Reverse_Unite = secondUserWord_Reverse_Unite + word[i];
        // N volte in cui dichiaro il while loop, decrementa di 1 
        i--
    }
    return secondUserWord_Reverse_Unite;
}

// Metto la condizione necessaria ma fuori dalla funzione
if (secondUserWord == secondUserWord_Reverse_Unite) {
    alert(`La parola ${secondUserWord} è palindroma ed equivale a ${secondUserWord_Reverse_Unite}`)
    console.log(secondUserWord_Reverse_Unite, secondUserWord);
} else {
    alert(`La parola ${secondUserWord} è diversa e non equivale a ${secondUserWord_Reverse_Unite}`)
    console.log(secondUserWord_Reverse_Unite, secondUserWord);
}











