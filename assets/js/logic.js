// access switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const bodyHTML = document.querySelector("body");
const circleImg = document.querySelector("#circle")

// set default to light mode
let mode = "light";

// listen for a click event on emoji
themeSwitcher.addEventListener("click", function() {
    // if in light mode, change to dark mode
    if (mode === "light") {
        mode = "dark";
        bodyHTML.setAttribute("class", "dark");

        // inserting unicode into js: https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript
        themeSwitcher.textContent = "\u{1F31D}";
        circleImg.setAttribute("src", "https://thumb.tildacdn.com/tild3765-6132-4137-b337-323536366161/-/format/webp/Ellipse_11.png")
    }
    // if in dark mode, change to light mode
    else {
        mode = "light";
        bodyHTML.setAttribute("class", "light");

        themeSwitcher.textContent = "\u{1F31A}";
        circleImg.setAttribute("src", "https://pngimg.com/uploads/sun/sun_PNG13421.png");
    }
});