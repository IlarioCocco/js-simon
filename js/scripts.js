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
    let numeroCasuale = (Math.floor(Math.random() * 5));
    numeroCasuali.push(numeroCasuale);
}
console.log("numeri generati casualmente:" + " " + numeroCasuali)
alert("numeri generati casualmente:" + " " + numeroCasuali);


// Da li parte un timer di 30 secondi.
// Inserire dei muneri visti precedentemente uno alla volta tramite il (prompt).
// Dopo che sono stati inseriti i 5 numeri,
let numeriUtente = [];
setTimeout(function () {
    for (let i = 0; i < 5; i++){
        numeroUtente = parseInt(prompt("inserisci i numeri visti precedentemente"));
    if (numeroCasuali.includes(numeroUtente)) {
        //inserisco il numero dell'utente all'interno dell'array numeriUtente
        numeriUtente.push(numeroUtente);
    }  
     
    }
    alert("ok hai individuato i numeri" + " " + numeriUtente);
    console.log("ok hai individuato i numeri" + " " + numeriUtente)
    //salvo in una var la lungh array numeriUtente
    var lunghezza = numeriUtente.length;
    //alert che mostra la lunghezza che ho salvato
    console.log("punteg utente:" + lunghezza);
    
    
}, 5000 );




// const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

// console.log(clothing.length);
// // expected output: 4








// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true























