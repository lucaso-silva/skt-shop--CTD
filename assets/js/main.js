const menuMobile = document.querySelector(".menu-hbg--img");
const menuNav = document.querySelector(".nav");

menuMobile.addEventListener("click", ()=>{
    menuNav.classList.toggle("nav-mobile");
    console.log("fui clicado!")
})