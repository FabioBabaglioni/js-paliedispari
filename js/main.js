// Palidroma


// Chiedere all’utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola");

// creare un array da poter revertare
let mioArray = []

mioArray.push(parolaUtente)

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
