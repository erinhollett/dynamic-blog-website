const postTitle = document.getElementById("title");
const postContent = document.getElementById("content");
const postImage = document.getElementById("image");

const queryPageId = window.location.search.split('=')[1];

document.getElementById('delete').onclick = (ev) => {
  const postId = window.location.search.split('=')[1];
  console.log(deletePost.toString())
  deletePost(postId);
  window.location = '../';
};

let allPosts = JSON.parse(localStorage.getItem('myPosts'));
if (!allPosts) {
  allPosts = [];
}

// find out post...
let postData = { title: "Blog Post not found!"}; // set it to empty for now
for (const post of allPosts) {
  if (post.id === queryPageId) {
    postData = post;
    break;
  }
}

if (typeof(Storage) !== "undefined") {
  postTitle.innerHTML = postData.title;
  postContent.innerHTML = postData.content;
  postImage.innerHTML = postData.image;
} else {
  alert("Could not retrieve storage");
}