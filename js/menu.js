const hamMenu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");

const hamIcon = document.querySelector(".js-hamburger");
let closed = true;


//sticky navigation
var aboutSection = new Waypoint({
    element: document.querySelector('.js--section-about'),
    handler: function(direction) {
        //if the menu window is closed
        if(closed){
            if(direction == "down"){
                stickyNav();
            }
            else{
                noStickyNav();
            }
        }
    },
    offset: '60px'
});

//shows nav elements 
hamMenu.addEventListener("click", ()=>{
    closed = !closed;
    //makes ham icon white
    hamIcon.classList.add("white");
    //shows links
    nav.classList.toggle("active");
    //adds animation class to links
    nav.querySelectorAll("ul li").forEach(el =>{
        el.classList.toggle("animate__fadeInDown");
    });

    hamMenu.classList.toggle("rotate-ham-menu");
    //makes header fixed so can see x throughout menu
    header.classList.add("fixed");
    
    //if the ilnks window were closed
    if(closed)
        determineHamColor(window.pageYOffset, aboutSection.triggerPoint);

});

//determines if nav should be stciky
const determineHamColor = (win, wp) => {
    //if window is on landing page
    if(win < wp){
        noStickyNav();
    }else{
        stickyNav();
    }
}

//makes navbar sticky
const stickyNav = ()=>{
    header.classList.add("fixed");
    hamIcon.classList.remove("white");
    hamIcon.classList.add("black");

    nav.querySelectorAll("ul li a").forEach(el =>{
        el.style.color = "#000";
    });
};

//makes navbar normal
const noStickyNav = ()=>{
    header.classList.remove("fixed");
    hamIcon.classList.remove("black");
    hamIcon.classList.add("white");

    nav.querySelectorAll("ul li a").forEach(el =>{
        el.style.color = "#fff";
    });
};