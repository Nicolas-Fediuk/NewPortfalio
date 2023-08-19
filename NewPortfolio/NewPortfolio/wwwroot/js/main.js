const navAction = document.querySelector(".menu");
const NewNav = document.querySelector("nav");
const h1 = document.querySelector("header");

const barAnimado = document.querySelector(".bars__menu");
let line1 = document.querySelector(".line--top");
let line2 = document.querySelector(".line--middle");
let line3 = document.querySelector(".line--bottom");

const botonMostrar = document.querySelector('.nav-action');
const ventana = document.getElementById('ventana');


cargarEventListeners();

function cargarEventListeners() {
    
    barAnimado.addEventListener("click", animar);
    botonMostrar.addEventListener("click", action);
}



function action() {

    const ventanaStyle = window.getComputedStyle(ventana);
    const ventanaRight = parseInt(ventanaStyle.right);

    if (ventanaRight === 0) {
        ventana.style.right = '-250px';
    } else {
        ventana.style.right = '0';
    }
}

window.onscroll = () => {

    const ventanaStyle = window.getComputedStyle(ventana);
    const ventanaRight = parseInt(ventanaStyle.right);

    if (ventanaRight === 0) {
        ventana.style.right = '-250px';
        animar();
    }
}

function animar() {
    line1.classList.toggle("activeline--top");
    line2.classList.toggle("activeline--middle");
    line3.classList.toggle("activeline--bottom");
}

//window.onscroll = () => {

//    animar();

//}

function ViewNavResponsive(){

    //if (window.getComputedStyle(navAction).getPropertyValue("display") == "none") {

    //    console.log("entro");
    //    const div = document.createElement("div");
    //    div.classList.add("ContentNewNav");
    //    div.innerHTML = `
    //        <div>
    //            <p>Nicolas Fediuk</p>
    //        </div>

    //        <div>
    //            <p>menu</p>
    //        </div>
    //    `;
    //    NewNav.appendChild(div);
    //}
}

let mediaQuery = window.matchMedia("(max-width: 991px)");


mediaQuery.addListener(function (mediaQueryList) {
    //if (mediaQueryList.matches) {
    //    ViewNavResponsive();
    //}
    //else {
    //    const navResponsive = document.querySelector("nav .ContentNewNav");
    //    if (navResponsive) {
    //        navResponsive.remove();
    //    }
    //}
});

