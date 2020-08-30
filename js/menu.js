const hamMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");

//sticky navigation
var waypoint = new Waypoint({
    element: document.querySelector('.js--section-about'),
    handler: function(direction) {
      if(direction == "down"){
          header.classList.add("fixed");
      }
      else{
          header.classList.remove("fixed");
      }
    },
    offset: '60px'
});

//shows nav elements 
hamMenu.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    //scroll
    document.body.classList.toggle("no-scroll");
    //hamburger menu animation
    hamMenu.classList.toggle("rotate-ham-menu");
});
