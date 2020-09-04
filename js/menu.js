const header = document.querySelector(".header");
const nav = document.querySelector("nav");
const hamMenu = document.querySelector(".hamburger");
const hamIcon = document.querySelector(".js-hamburger");

let closed = true;


var aboutSection = new Waypoint({
    element: document.querySelector('.js--section-about'),
    handler: function(direction) {
        //if the menu window is closed
        if(closed){
            if(direction == "down"){
                header.classList.add("fixed");
            }
            else{
                header.classList.remove("fixed");
            }
        }
    },
    offset: '60px'
});

hamMenu.addEventListener("click", ()=>{
    clicked();
});

const clicked = ()=>{
    closed = !closed;
    hamIcon.classList.toggle("white");
    nav.classList.toggle("white");
    nav.classList.toggle("active");
    nav.querySelectorAll("ul li").forEach(el =>{
        el.classList.toggle("animate__fadeInDown");
    });

    hamMenu.classList.toggle("rotate-ham-menu");
    hamMenu.classList.toggle("stuck");

    if(closed)
        determineStickyNav(window.pageYOffset, aboutSection.triggerPoint);
}

//determines if navbar should be sticky
const determineStickyNav = (win, wp) => {
    if(win < wp){
        header.classList.remove("fixed");
    }else{
        header.classList.add("fixed");
    }
}

//closes mobile navbar if open
window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 1024 && !closed){
        clicked();
    }
})
