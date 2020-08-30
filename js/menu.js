const hamMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");

const hamIcon = document.querySelector(".js-hamburger");
let closed = true;

const menu = document.querySelector(".menu");


//sticky navigation
var aboutSection = new Waypoint({
    element: document.querySelector('.js--section-about'),
    handler: function(direction) {
        //if the window is closed
        if(closed){
            if(direction == "down"){
                header.classList.add("fixed");
                hamIcon.classList.add("black");
            }
            else{
                header.classList.remove("fixed");
                hamIcon.classList.remove("black");
            }
        }
    },
    offset: '60px'
});

//shows nav elements 
hamMenu.addEventListener("click", ()=>{
    closed = !closed;
    //makes ham icon black
    hamIcon.classList.add("black");
    //shows links
    nav.classList.toggle("active");


    hamMenu.classList.toggle("rotate-ham-menu");
    //makes header fixed so can see x throughout menu
    header.classList.add("fixed");
    
    //if the ilnks window were closed
    if(closed)
        changeHamColor(window.pageYOffset, aboutSection.triggerPoint);

});

//determines if nav should be stciky
const changeHamColor = (win, wp) => {

    if(win < wp){
        header.classList.remove("fixed");
        hamIcon.classList.remove("black");
    }else{
        header.classList.add("fixed");
        hamIcon.classList.add("black");
    }
}