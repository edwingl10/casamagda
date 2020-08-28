
/*
const mainNav = document.getElementById("js-menu");

const navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('hide');
}); 
*/

const hamMenu = document.querySelector(".hamburger");
const hamLines = document.querySelector(".ham-lines");

const navLinks = document.getElementById('links');
let navClosed = true;

hamMenu.addEventListener("click", ()=>{
    if(navClosed){
        hamLines.classList.toggle("rotate-ham-menu");
    }
    
    navLinks.style.display = 'flex';
    navClosed = !navClosed;
})