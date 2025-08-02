window.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('blogForm');
  formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    // form validation to make sure the title and content isn't empty
    if (title === "" || content === "") {
      alert("Post not completed. Please fill in the title and content before submitting.");
    } else { 

      // making the post object with data from the inputted form values
      const postData = {
        title: title,
        content: content,
        image: image,
        date: Date.now(),
        id: Date.now().toString(),
    };

    // == LOCAL STORAGE == //

    // retrieve current array of postData from localStorage
    // it parses through the JSON first to turn it from a string to an array
    let posts = JSON.parse(localStorage.getItem('myPosts')) || []; // start a new array if nothing is saved
    posts.push(postData);  // push the new postData to the localStorage array
    localStorage.setItem('myPosts', JSON.stringify(posts)); // save updated to local storage again (as a JSON string)
    }
  });
});