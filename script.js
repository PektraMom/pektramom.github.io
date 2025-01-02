/* creating button click show hide navbar */
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input",{
    strings: ["Developer", "recent graduate from College CDI"],
    typedSpeed: 65,
    backSpeed: 50,
    backDelay: 1500, // 1.5s pause before backspeed
    loop: true
});