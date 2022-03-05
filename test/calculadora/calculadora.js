var id1 = document.getElementById("id1");
var id2 = document.getElementById("id2");
var id3 = document.getElementById("id3");
var lectura_de_id1;
var lectura_de_id3;
var id4 = document.getElementById("id4");
var id5 = document.getElementById("id5");
id4.addEventListener("click", PressToButton)

function PressToButton() {
    lectura_de_id1 = parseInt(id1.value);
    lectura_de_id3 = parseInt(id3.value);

    if (id2.value == "Sumar") {
        id5.innerHTML = Math.floor(lectura_de_id1 + lectura_de_id3);
    }
    else if (id2.value == "Restar") {
        id5.innerHTML = Math.floor(lectura_de_id1 - lectura_de_id3);
    }
    else if (id2.value == "Multiplicar") {
        id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3);
    }
    else if (id2.value == "Multiplicar") {
        id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3);
    }
    else if (id2.value == "Multiplicar") {
        id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id3);
    }
    else if (id2.value == "Dividir") {
        id5.innerHTML = Math.floor(lectura_de_id1 / lectura_de_id3);
    }
}