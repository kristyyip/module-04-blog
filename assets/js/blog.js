// grab all referencese to DOM elements
const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");

// retrieve user input values from local storage
function loadFromLocalStorage() {
    let blogPostObject = {}

    let username = localStorage.getItem("username");
    let title = localStorage.getItem("title");
    let content = localStorage.getItem("content");

    // create object for blog post and set properties to local storage values
    blogPostObject = {
        username: username,
        title: title,
        content: content
    };

    return blogPostObject;
}

// add submission for blog post into array
function addBlogPostToArray() {
    let blogPostsArray = [];
    let blogPostObject = loadFromLocalStorage();
    
    // create key:value pair in local storage if blogPostsArray doesn't exist yet
    // src: https://stackoverflow.com/questions/16010827/html5-localstorage-checking-if-a-key-exists
    if (localStorage.getItem("blogPostsArray") === null) {
        localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray));
    }

    // retrieve current value in blogPostsArray from local storage and parse string back into an array
    blogPostsArray = JSON.parse(localStorage.getItem("blogPostsArray"));
    let lastObject = blogPostsArray[blogPostsArray.length - 1];

    // validation to prevent consecutive duplicate posts, adds blogPostObject to blogPostArray if new post
    if ((blogPostsArray.length === 0) || (lastObject.username !== blogPostObject.username) && (lastObject.title !== blogPostObject.title) && (lastObject.content != blogPostObject.content)) {
        // add object to end of array
        blogPostsArray.push(blogPostObject);

        // set blogPostsArray in local storage to new array with added blog post entry
        localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray));
    }
}

// load blog posts from blogPostArray and create + display them on page
function loadblogPosts() {
    // retrieve blogPostsArray from local storage, parse string into array
    let blogPostsArray = JSON.parse(localStorage.getItem("blogPostsArray"));

    // iterate through blogPostsArray to get blog post information at each index
    for (i=0; i < blogPostsArray.length; i++) {
        // create article element and append to main element
        const article = document.createElement("article");
        mainEl.appendChild(article);

        // select current article element being created in this iteration
        let articleEl = document.querySelectorAll("article")[i];

        // create title (h3) element and append to created article element
        const titleEl = document.createElement("h3");
        titleEl.textContent = blogPostsArray[i].title;
        articleEl.appendChild(titleEl);

        //  create content (p) element and append to created article element
        const contentEl = document.createElement("p");
        contentEl.className = "content";
        contentEl.textContent = blogPostsArray[i].content;
        articleEl.appendChild(contentEl);

        //  create username (p) element and append to created article element
        const usernameEl = document.createElement("p")
        usernameEl.className = "username";
        usernameEl.textContent = `Posted by ${blogPostsArray[i].username}`;
        articleEl.appendChild(usernameEl);
    }
}

// goes back to index.html when back button is clicked
backBtn.addEventListener("click",  function () {
    window.location = "index.html"
});

// run functions
addBlogPostToArray();
loadblogPosts();