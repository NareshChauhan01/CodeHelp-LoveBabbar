// Nav Bar

let navBar = document.querySelector("nav");
let humburger = document.querySelector(".sub-hamburger");

humburger.addEventListener('click', () => {
    navBar.classList.toggle("active");
})

