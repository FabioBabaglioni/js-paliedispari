// Palidroma


// Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola");

// creare un array da poter revertare
let mioArray = []

mioArray.push(parolaUtente.split (""))

console.log(mioArray)

let risultato = palindroma(parolaUtente)

console.log(risultato)


// Creare una funzione per capire se la parola inserita è palindroma
function palindroma(parolaUtente){

    if(parolaUtente == mioArray.reverse()){

        return "palindroma"

    }else{

        return "non palindorma"

    }
}


// l'utente inserisce la parola
// io prendso la parola
// se la mia parola coincide con la parola revertata
// mia parola === miaparola.invertita
// allora è palindorma 
// else non lo è 