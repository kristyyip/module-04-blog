// grab all referencese to DOM elements
usernameInput = document.querySelector("#username");
titleInput = document.querySelector("#title");
contentInput = document.querySelector("#content");
msg = document.querySelector("#msg");
submitBtn = document.querySelector("#submit");

let blogPostsArray = []

function updateLocalStorage() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("title", titleInput.value);
    localStorage.setItem("content", contentInput.value);
};

function loadFromLocalStorage() {
    username = localStorage.getItem("username");
    title = localStorage.getItem("title");
    content = localStorage.getItem("content");

    console.log(username, title, content);

    let blogPostObject = {
        username: username,
        title: title,
        content: content
    }

    blogPostsArray.push(blogPostObject);
    console.log(blogPostsArray);
    return blogPostsArray;
}

// 
submitBtn.addEventListener("click",  function (event) {
    event.preventDefault();
    if ((usernameInput.value === "" ) || (titleInput.value === "") || (contentInput.value === "")) {
        msg.textContent = "Please make sure all fields are completed to submit the form."
    }
    else {
        msg.textContent = ""

        updateLocalStorage();
        loadFromLocalStorage();

        window.location = "blog.html"
    }
});