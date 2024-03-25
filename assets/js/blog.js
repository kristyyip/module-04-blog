// grab all referencese to DOM elements
mainEl = document.querySelector("main");
backBtn = document.querySelector("#back");

// retrieve values from local storage
function loadFromLocalStorage() {
    let blogPostObject = {}

    username = localStorage.getItem("username");
    title = localStorage.getItem("title");
    content = localStorage.getItem("content");

    // create object for blog post
    blogPostObject = {
        username: username,
        title: title,
        content: content
    };

    return blogPostObject;
}

// 
function addBlogPostToArray() {
    let blogPostsArray = [];
    let blogPostObject = loadFromLocalStorage();
    
    // create key:value pair in local storage if blogPostsArray doesn't exist yet
    if (localStorage.getItem("blogPostsArray") === null) {
        localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray));
    }

    // retrieve current value in blogPostsArray from local storage and parse string back into an array
    blogPostsArray = JSON.parse(localStorage.getItem("blogPostsArray"));

    // add blogPostObject to blogPostArray
    blogPostsArray.push(blogPostObject);

    // set blogPostsArray in local storage to new array with added blog post entry
    localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray));
}

// load blog posts from blogPostArray and create + display them on page
function loadblogPosts() {
    // retrieve
    const blogPostsArray = JSON.parse(localStorage.getItem("blogPostsArray"));

    // iterate through blogPostsArray to get blog post information at each index
    for (i=0; i < blogPostsArray.length; i++) {
        // create article element and append to main element
        const article = document.createElement("article");
        mainEl.appendChild(article);

        // select current article element being created in this iteration
        articleEl = document.querySelectorAll("article")[i];

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
        usernameEl.textContent = blogPostsArray[i].username;
        articleEl.appendChild(usernameEl);
    }
}

// goes back to index.html when back button is clicked
backBtn.addEventListener("click",  function (event) {
    event.preventDefault();
    window.location = "index.html"
});

// run functions
addBlogPostToArray();
loadblogPosts();