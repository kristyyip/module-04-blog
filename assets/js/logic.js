// access switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const bodyHTML = document.querySelector("body");
const circleImg = document.querySelector("#circle")

// set default to light mode
let mode = "light";

// create and mode key/value in local storage to default if it doesn't exist
if (localStorage.getItem("mode") === null) {
    localStorage.setItem("mode", mode);
}

// retrieve location href of index.html from local storage
const windowLocation = localStorage.getItem("windowLocation");

// set theme to dark mode
function changeToDarkMode() {
    // reassign mode
    mode = "dark";
    localStorage.setItem("mode", mode);

    // change class to dark
    bodyHTML.setAttribute("class", "dark");

    // change emoji
    // inserting unicode into js | src: https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript
    themeSwitcher.textContent = "\u{1F31D}";

    // only change img src if on index.html
    if (window.location.href == windowLocation) {
        circleImg.setAttribute("src", "https://thumb.tildacdn.com/tild3765-6132-4137-b337-323536366161/-/format/webp/Ellipse_11.png")
    }
}

// set theme to light mode
function changeToLightMode() {
    // reassign mode
    mode = "light";
    localStorage.setItem("mode", mode);

    // change class to light
    bodyHTML.setAttribute("class", "light");

    // change emoji
    themeSwitcher.textContent = "\u{1F31A}";

    // only change img src if on index.html
    if (window.location.href === windowLocation) {
        circleImg.setAttribute("src", "https://pngimg.com/uploads/sun/sun_PNG13421.png");
    }
}

// listen for a click event on emoji and change to light mode/dark mode
themeSwitcher.addEventListener("click", function() {
    if (mode === "light") {
        changeToDarkMode();
    }
    else {
        changeToLightMode();
    }
})

// maintain light mode/dark mode across pages when page loads
// src: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.addEventListener("load", event => {
    let mode = localStorage.getItem("mode");

    if (mode === "dark") {
        changeToDarkMode();
    }
    else {
        changeToLightMode();
    }
})