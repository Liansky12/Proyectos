const   $d = document,
        $div = $d.querySelector("div"),
        $form = $d.querySelector("form");

function piramide(num) {
    let piramide = "";
    // Iterar sobre cada fila de la pirámide
    for (let i = 1; i <= num; i++) {
        // Calcular la cantidad de espacios en blanco para centrar los asteriscos
        const spaces = " ".repeat(num - i);

        // Imprimir los espacios en blanco y los asteriscos para la fila actual
        piramide += spaces + "*".repeat(2 * i - 1) + "<br>";
    }
    $div.innerHTML = piramide;
}

$form.addEventListener("submit", e => {
    e.preventDefault();
    const $num = $form.querySelector("input").value;
    piramide(parseInt($num));
    $form.querySelector("input").value = "";
});
