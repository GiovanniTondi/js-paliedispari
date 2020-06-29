/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

var btn = document.getElementById('btn');
var messaggio = document.getElementById('messaggio');

btn.addEventListener("click", function () {
    var parola = document.getElementById('parola').value;

    var successo = isPalindroma(parola);

    document.getElementById('jumbo').classList.add('transition');
    messaggio.className = "show";

    if (!parola) {
        messaggio.innerHTML = "Inserisci una parola!";
        messaggio.classList.add("error");
    } else if (successo) {
        console.log("La parola è palindroma");
        messaggio.innerHTML = "La parola è palindroma";
        messaggio.classList.add("successo");
    } else {
        console.log("La parola non è palindroma");
        messaggio.innerHTML = "La parola non è palindroma";
        messaggio.classList.add("notSuccess");
    }

});


// function
function isPalindroma(string) {
    string = string.toLowerCase();
    string = string.replace(/\s/g,'');
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    var res = true;
    for (var i = 0; i < string.length/2; i++) {
        if (!(string[i] == string[string.length - 1 - i])) {
            res = false;
        }
        console.log(string[i], string[string.length - 1 - i]);
    }

    if (res) {
        return true;
    }
    
    return false;
}
