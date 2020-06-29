/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    var parola = document.getElementById('parola').value;
    var successo = true;

    for (var i = 0; i < parola.length/2; i++) {
        console.log(parola[i], parola[parola.length -1 - i]);
        if (parola[i] == parola[parola.length - 1 - i]) {
            console.log("Uguale");
        } else {
            console.log("Non uguale");
            successo = false;
        }
    }

    if (successo) {
        console.log("La parola è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }

});
