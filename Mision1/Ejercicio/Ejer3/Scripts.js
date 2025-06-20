function mostrarNumerosHastN() {
    const input = document.getElementById("inputNumber");
    const resultadoDiv = document.getElementById("resultado");
    const valor = parseInt(input.value);

    if (isNaN(valor) || valor < 1) {
        resultadoDiv.innerHTML = "Por favor, ingresa un número entero positivo.";
        return;
    } 
    
    let resultado = "";
    for (let i = 1; i <= valor; i++) {
        resultado += i + "<br>";
    }
    resultadoDiv.innerHTML = resultado;
}

function iniciar() {
    const boton = document.getElementById("mostrabtn");
    boton.addEventListener("click", mostrarNumerosHastN);
}

window.addEventListener("DOMContentLoaded", iniciar);