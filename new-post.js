// Getting the form's inputs: // 
window.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('blogForm');
  formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    console.log(title, content, image);
  });
});