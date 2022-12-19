'use strict'

headerAnimationTimers()

// Nav toggle hide/show
const menubar = document.querySelector('#menu-bar')
const nav = document.querySelector("nav")
menubar.addEventListener('click', toggleNav)
function toggleNav() {
    document.getElementById("menu-bar").classList.toggle("change")
    document.getElementById("menu-bg").classList.toggle("change-bg")
    // Change nav state
    nav.classList.toggle("change")
    if (nav.style.display === "block") {
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    } 
}

// Header animations timer on page load
function headerAnimationTimers() {
    setTimeout(() => {
        document.querySelector("#menu").classList.add("slide-in-top");
    }, 1000)
    setTimeout(() => {
        document.querySelector(".header-title").style.display = "block"
        document.querySelector(".header-title").classList.add("tracking-in-expand");
    }, 1500)
    setTimeout(() => {
        document.querySelector(".arrow-down").style.display = "block"
        document.querySelector(".arrow-down").classList.add("flip-in-hor-top");
    }, 2250)
    setTimeout(() => {
        document.querySelector(".arrow-down").classList.remove("flip-in-hor-top");
        document.querySelector(".arrow-down").classList.add("bounce-top");
    }, 3000)
}


