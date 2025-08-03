window.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('blogForm');
  console.log('how many times does this print/')

  if (window.location.search.includes('?id=')) {
    const postId = window.location.search.split('=')[1];
    const post = getPost(postId);
    console.log(post);
    document.getElementById('title').value = post.title;
    document.getElementById('content').value = post.content;
    document.getElementById('image').value = post.image;
  }
  formElement.addEventListener("submit", submitPost);
});

function submitPost(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const image = document.getElementById('image').value;

  // form validation to make sure the title and content isn't empty
  if (title === "" || content === "") {
    alert("Post not completed. Please fill in the title and content before submitting.");
  } else { 
    // get or make new id
    let postId = Date.now().toString();
    if (window.location.search.includes('?id=')) {
      postId = window.location.search.split('=')[1];
    }

    // making the post object with data from the inputted form values
    const postData = {
      title: title,
      content: content,
      image: image,
      date: Date.now(),
      id: postId,
    };

    savePost(postData);

    // redirect to new post!
    window.location.href = `../post/post.html?id=${postData.id}`;
  }
}
