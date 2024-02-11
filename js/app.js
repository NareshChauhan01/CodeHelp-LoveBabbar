// Nav Bar

let navBar = document.querySelector("nav");
let humburger = document.querySelector(".sub-hamburger");

humburger.addEventListener('click', () => {
    navBar.classList.toggle("active");
})

// Slide-Text
var typeData = new Typed(".role", {
    strings: [
        "Love",
        "Babber"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});


