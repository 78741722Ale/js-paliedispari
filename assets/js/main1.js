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
