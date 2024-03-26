// grab all referencese to DOM elements
usernameInput = document.querySelector("#username");
titleInput = document.querySelector("#title");
contentInput = document.querySelector("#content");
msg = document.querySelector("#msg");
submitBtn = document.querySelector("#submit");

// set user inputs as key:value pairs in local storage
function updateLocalStorage() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("title", titleInput.value);
    localStorage.setItem("content", contentInput.value);
}

// listen for click on submit button to store input values into local storage and redirect user to blog.html
submitBtn.addEventListener("click",  function(event) {
    // prevent default behavior
    event.preventDefault();

    // validation to check if all fields have been filled out
    if ((usernameInput.value === "" ) || (titleInput.value === "") || (contentInput.value === "")) {
        // show error message if any field is empty
        msg.textContent = "Please make sure all fields are completed to submit the form."
    }
    else {
        // no error message
        msg.textContent = ""

        // set key:value pairs in local storage
        updateLocalStorage();

        // redirect to blog.html
        window.location = "blog.html"
    }
})

// add window location href to local storage on page load of index.html
// src: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.onload = (event) => {
    localStorage.setItem("windowLocation", window.location.href);
}