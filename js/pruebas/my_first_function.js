function my_frist_function() {
    console.log("hola mundo");
}

function my_second_function(a, b) {
    if (a < 0 || b < 0) {
        console.log("No puede ser un número menor que cero");
    }
    return a * b;
}

console.log(my_second_function(3, 5));