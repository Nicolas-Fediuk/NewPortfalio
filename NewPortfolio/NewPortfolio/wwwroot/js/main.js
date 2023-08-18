const navAction = document.querySelector(".menu");
const NewNav = document.querySelector("nav");
const h1 = document.querySelector("header");


cargarEventListeners();

function cargarEventListeners() {
    
    
}

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

