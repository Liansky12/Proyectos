const num = prompt("¿Cuántas veces se va a iterar?");
var resultado = 0;
for (let i = 0; i < num; i++) {
    resultado += parseInt(prompt("Introduce el número " + i + ":"));
}
alert("El resultado es: " + resultado);