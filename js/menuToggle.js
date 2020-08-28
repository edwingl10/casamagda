
/*
const mainNav = document.getElementById("js-menu");

const navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('hide');
}); 
*/

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("rotate-ham-menu");
    menu.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});