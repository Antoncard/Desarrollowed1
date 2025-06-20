function revisarEdad() {
    const inputEdad = document.getElementById('miEdad');
    const edad = parseInt(inputEdad.value);
    const mensajeParrafo = document.getElementById('mensaje');

    mensajeParrafo.textContent = '';
    mensajeParrafo.classList.remove('denegado', 'permitido');

    if (isNaN(edad) || edad < 0) {
        mensajeParrafo.classList.add('denegado');
        alert('Ups, Necesitas ingresar un numero valido.');
    } else if (edad < 18) {
        mensajeParrafo.classList.add('denegado');
        alert('Lo sentimos, acceso denegado.');
    } else {
        mensajeParrafo.classList.add("permitido");
        alert("Bienvenido");
    }
}