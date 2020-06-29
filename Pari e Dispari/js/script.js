/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

var btn = document.getElementById('btn');
var messaggio = document.getElementById('messaggio');

btn.addEventListener("click", function () {

    var valore = document.getElementById('pariDispari').value;
    var num = parseInt(document.getElementById('numero').value);

    numRandom = getRandomIntInclusive(1, 5);

    somma = num + numRandom;
    console.log(num, numRandom,somma);

    console.log(isEven(somma) , valore);

    document.getElementById('jumbo').classList.add('transition');
    messaggio.className = "show";

    if ((isEven(somma) == valore)) {
        console.log("Hai vinto!");
        messaggio.innerHTML = "È uscito " + somma + "!<br>Complimenti!";
        messaggio.classList.add("successo");
    } else {
        console.log("Hai perso");
        messaggio.innerHTML = "È uscito " + somma + "!<br>Hai perso!";
        messaggio.classList.add("notSuccess");
    }

    btn.innerHTML = "Riprova";
});


// function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function isEven(number) {
    if (number%2) {
        return false;
    }
    return true;
}
