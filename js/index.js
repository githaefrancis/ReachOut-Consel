// This file contains the javascript codes for the website
// execute the sticky function when a user scrolls
window.onscroll = function () {
  makeSticky();
};

var nav = document.getElementById("nav");

// Get the position of the navbar
var stickyNav = nav.offsetTop;

// Add a sticky class to the navbar on scrolling

function makeSticky() {
  if (window.pageYOffset > stickyNav) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
// show and hide menu in mobile view
function showMenu(){
  var menuLinks=document.getElementById("menu_links");
  if (menuLinks.style.display==="block"){
    menuLinks.style.display="none";
    console.log("to block");
  }
  else{
    menuLinks.style.display="block";
    console.log("to block");
  }

}