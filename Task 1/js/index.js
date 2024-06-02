var lastScrollTop;
let navbar = document.getElementById('header'); // Get The NavBar
window.addEventListener("scroll",function(){
    const scrollY = this.scrollY;
    if (scrollY>lastScrollTop) {
        // navbar.style.top = '-150px';
        navbar.classList.add("animateUp")
        navbar.classList.remove("animateDown")
    }else{
        // navbar.style.top = '0px';
        navbar.classList.add("animateDown")
        navbar.classList.remove("animateUp")
    }
    lastScrollTop = scrollY;
})
var openNavButton = document.getElementById("openNav");
var smallNavbar = document.getElementById("smallNavbar");
var closeNavButton = document.getElementById("closeNav");
var body = document.querySelector("body");
openNavButton.addEventListener("click",function(){
    smallNavbar.style.display = "block";
    body.classList.add("nav_open");
})
closeNavButton.addEventListener("click",function(){
    smallNavbar.style.display = "none";
    body.classList.remove("nav_open");
    
})