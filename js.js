document.addEventListener("DOMContentLoaded", function () {

    // Menú de navegación
    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            console.log("Navegando a: " + enlace.textContent);
        });
    });

    // Botón para volver al inicio
    const botonesInicio = document.querySelectorAll(".btn-inicio");

    botonesInicio.forEach(function (boton) {
        boton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    });

    // Formulario de contacto
    const formulario = document.querySelector("#formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const correo = document.querySelector("#correo").value.trim();
            const mensaje = document.querySelector("#mensaje").value.trim();

            if (!nombre || !correo || !mensaje) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

            if (!correoValido) {
                alert("Escribe un correo electrónico válido.");
                return;
            }

            alert("¡Gracias, " + nombre + "! Tu mensaje se ha registrado en esta demostración.");

            formulario.reset();
        });
    }

    // Botón para conocer más
    const botonConocer = document.querySelector("#btnConocer");

    if (botonConocer) {
        botonConocer.addEventListener("click", function () {
            window.location.href = "lugares.html";
        });
    }

});