// esercizio Simon Says:

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire dei numeri;
// Inserire dei muneri visti precedentemente uno alla volta tramite il (prompt).
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Un alert() espone 5 numeri generati casualmente.
let numeroCasuali = [];
for (let i = 0; i < 5; i++){
    let numeroCasuali = (Math.floor(Math.random() * 5));
    console.log("numeri generati casualmente:" + numeroCasuali)
    alert("numeri generati casualmente:" + " " + numeroCasuali);
}


// Da li parte un timer di 30 secondi.
// Inserire dei muneri visti precedentemente uno alla volta tramite il (prompt).
// Dopo che sono stati inseriti i 5 numeri,
let numeriUtente = [];
setTimeout(function () {
    for (let i = 0; i < 5; i++){
        numeriUtente = parseInt(prompt("inserisci i numeri visti precedentemente"));
        console.log("numeri Utente:" + numeriUtente)
        alert("numeri Utente:" + " " + numeriUtente);
        if (numeriUtente == numeroCasuali[i]) {
        }
    }
    alert("ok hai individuato i numeri");
    console.log("ok hai individuato i numeri")
    
}, 5000 );

// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

























