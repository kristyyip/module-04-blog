// grab all referencese to DOM elements
usernameInput = document.querySelector("#username");
titleInput = document.querySelector("#title");
contentInput = document.querySelector("#content");
msg = document.querySelector("#msg");
submitBtn = document.querySelector("#submit");

function updateLocalStorage() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("title", titleInput.value);
    localStorage.setItem("content", contentInput.value);
};

// 
submitBtn.addEventListener("click",  function (event) {
    event.preventDefault();
    if ((usernameInput.value === "" ) || (titleInput.value === "") || (contentInput.value === "")) {
        msg.textContent = "Please make sure all fields are completed to submit the form."
    }
    else {
        msg.textContent = ""

        updateLocalStorage();

        window.location = "blog.html"
    }
});