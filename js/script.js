/*=========================================
ESTUDIO ROD & ASOCIADOS
script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

   const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.transition = "opacity 1s";

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },3000);

});
    /*====================================
    HEADER
    ====================================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 80){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }

    });

    /*====================================
    MENU RESPONSIVE
    ====================================*/

    const menuBtn = document.getElementById("menu-btn");

    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

    /*====================================
    SCROLL SUAVE
    ====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const destino=document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*====================================
    ANIMACIONES
    ====================================*/

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".service-card,.about-image,.about-content,.why-text,.why-image,.contact-item,.stats-grid div"

    ).forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

    /*====================================
    CONTADORES
    ====================================*/

    const counters=document.querySelectorAll(".counter");

    let started=false;

    function startCounters(){

        if(started) return;

        if(window.scrollY>

            document.getElementById("stats").offsetTop-500){

            started=true;

            counters.forEach(counter=>{

                const texto=counter.innerText;

                const numero=parseInt(texto.replace(/\D/g,""));

                const sufijo=texto.replace(/[0-9]/g,"");

                let actual=0;

                const incremento=Math.max(1,Math.ceil(numero/120));

                const intervalo=setInterval(()=>{

                    actual+=incremento;

                    if(actual>=numero){

                        actual=numero;

                        clearInterval(intervalo);

                    }

                    counter.innerText=actual+sufijo;

                },18);

            });

        }

    }

    window.addEventListener("scroll",startCounters);

    startCounters();

    /*====================================
    PARALLAX HERO
    ====================================*/

    const hero=document.querySelector(".hero");

    window.addEventListener("scroll",()=>{

        const y=window.pageYOffset;

        hero.style.backgroundPosition=

        "center "+(y*0.45)+"px";

    });

    /*====================================
    BOTÓN VOLVER ARRIBA
    ====================================*/

    const topBtn=document.createElement("div");

    topBtn.id="topButton";

    topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    topBtn.style.cssText=`

        position:fixed;

        left:30px;

        bottom:30px;

        width:55px;

        height:55px;

        border-radius:50%;

        background:#C8A239;

        color:#111;

        display:flex;

        align-items:center;

        justify-content:center;

        cursor:pointer;

        opacity:0;

        visibility:hidden;

        transition:.3s;

        z-index:999;

        box-shadow:0 10px 25px rgba(0,0,0,.4);

    `;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.style.opacity="1";

            topBtn.style.visibility="visible";

        }else{

            topBtn.style.opacity="0";

            topBtn.style.visibility="hidden";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*====================================
    EFECTO BOTONES
    ====================================*/

    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-4px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0px)";

        });

    });

    /*====================================
    AÑO AUTOMÁTICO
    ====================================*/

    const year=document.getElementById("year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

});
