/*====================================================
ESTUDIO ROD & ASOCIADOS
script.js
Versión 2.0
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    LOADER
    =========================================*/

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.style.transition = "opacity .8s ease";

                loader.style.opacity = "0";

                setTimeout(() => {

                    loader.style.display = "none";

                }, 800);

            }, 2000);

        });

    }

    /*=========================================
    HEADER
    =========================================*/

    const header = document.getElementById("header");

    function headerScroll() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    }

    window.addEventListener("scroll", headerScroll);

    headerScroll();

    /*=========================================
    MENÚ RESPONSIVE
    =========================================*/

    const menuBtn = document.getElementById("menu-btn");

    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

        document.querySelectorAll("nav a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

            });

        });

    }

    /*=========================================
    SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});
/*=========================================
REVEAL AL HACER SCROLL
=========================================*/

const revealElements = document.querySelectorAll(
    ".service-card, .about-image, .about-content, .why-image, .why-text, .contact-item, .stats-grid div, .cta"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
CONTADORES
=========================================*/

const counters = document.querySelectorAll(".counter");

const speed = 40;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText);

        let current = 0;

        const updateCounter = () => {

            current += Math.ceil(target / speed);

            if (current >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
AÑO AUTOMÁTICO
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*=========================================
BOTÓN VOLVER ARRIBA
=========================================*/

const backTop = document.createElement("button");

backTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

backTop.className = "back-top";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
EFECTO EN BOTONES
=========================================*/

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

/*=========================================
FIN
=========================================*/