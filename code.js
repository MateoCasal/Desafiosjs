// Pregunta al usuario cuantos productos desea //

let cantidad = prompt(" Cuantos productos desea llevar? (solo numeros)");


// Se define el precio del producto y se calcula el precio final //

let precio = 350;
let preciofinal = cantidad * precio;
alert("el precio final es de $" + preciofinal);


// se define si el envio es gratis o no //

if (preciofinal >= 1500) {
    alert("El envio es gratis");
} else if (preciofinal < 1500) {
    alert("Se debe abonar el envio");
}



// function para calcular el precio en 3 cuotas //

function calcular3cuotas(num1) {
    let cuotas = num1 / 3;
    alert("El precio en 3 cuotas es de $" + cuotas);
}

calcular3cuotas(preciofinal);