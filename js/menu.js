const hamMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");

const hamIcon = document.querySelector(".js-hamburger");

//sticky navigation
var waypoint = new Waypoint({
    element: document.querySelector('.js--section-about'),
    handler: function(direction) {
      
      if(direction == "down"){
          header.classList.add("fixed");
          hamIcon.classList.add("black");
      }
      else{
          header.classList.remove("fixed");
          hamIcon.classList.remove("black");
      }
    },
    offset: '60px'
});

//shows nav elements 
hamMenu.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    hamMenu.classList.toggle("rotate-ham-menu");
});
