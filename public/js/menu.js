const header = document.querySelector(".header");
const nav = document.querySelector("nav");
const hamMenu = document.querySelector(".hamburger");
const hamIcon = document.querySelector(".js-hamburger");

let closed = true;

var aboutSection = new Waypoint({
  element: document.querySelector(".js--section-about"),
  handler: function (direction) {
    //if the menu window is closed
    if (closed) {
      if (direction == "down") {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  },
  offset: "60px",
});

hamMenu.addEventListener("click", () => {
  clicked();
});

const clicked = () => {
  closed = !closed;
  hamIcon.classList.toggle("white");
  nav.classList.toggle("white");
  nav.classList.toggle("active");
  nav.querySelectorAll("ul li").forEach((el) => {
    el.classList.toggle("animate__fadeInDown");
  });

  hamMenu.classList.toggle("rotate-ham-menu");
  hamMenu.classList.toggle("stuck");

  // Toggle body scrolling
  if (nav.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  if (closed) determineStickyNav(window.pageYOffset, aboutSection.triggerPoint);
};

//determines if navbar should be sticky
const determineStickyNav = (win, wp) => {
  if (win < wp) {
    header.classList.remove("fixed");
  } else {
    header.classList.add("fixed");
  }
};

//closes mobile navbar if open
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && !closed) {
    clicked();
  }
});

//on load animations
var wp1 = new Waypoint({
  element: document.querySelector(".js--wp-1"),
  handler: function (direction) {
    document.querySelector(".js--wp-1").classList.add("animate_fadeInRight");
  },
  offset: "50%",
});

var wp2 = new Waypoint({
  element: document.querySelector(".js--wp-2"),
  handler: function (direction) {
    document.querySelector(".js--wp-2").classList.add("animate_fadeIn");
  },
  offset: "60%",
});

var wp3 = new Waypoint({
  element: document.querySelector(".js--wp-3"),
  handler: function (direction) {
    document.querySelector(".reasons").classList.add("animate_fadeIn");
  },
  offset: "50%",
});

$(document).ready(function () {
  //call to action btn scroll
  $(".js--learn-more").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-about").offset().top - 60 },
      1000
    );
  });

  //Navigation scroll
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          if (!closed) {
            clicked();
          }
          $("html, body").animate(
            { scrollTop: target.offset().top - 60 },
            1000
          );
        }
      }
    });
});
