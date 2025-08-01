// Getting the form's inputs: // 
window.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('blogForm');
  formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    if (title === "" || content === "") {
      alert("Post not completed. Please fill in the title and content before submitting.");
    } else { 
      // Making an object from the post data (local storage): //
      const postData = {
      title: title,
      content: content,
      image: image,
      date: Date.now(),
      id: Date.now().toString(),
    };
    console.log(postData);
    }
  });
});