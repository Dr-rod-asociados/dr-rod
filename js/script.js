// ============================
// DR. ROD - Script
// ============================

// Año automático en el footer (si existe el elemento)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Animación al hacer scroll
const elementos = document.querySelectorAll(".card, .contact-card, .about-image, .about-text");

const mostrarElementos = () => {

    const altoPantalla = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altoPantalla - 120) {
            elemento.classList.add("visible");
        }

    });

};

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);

// Navbar cambia de color al bajar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#000";

    } else {

        header.style.background = "rgba(0,0,0,.85)";

    }

});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});