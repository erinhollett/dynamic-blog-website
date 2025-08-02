const postTitle = document.getElementById("title");
const postContent = document.getElementById("content");
const postImage = document.getElementById("image");

if (typeof(Storage) !== "undefined") {
  postTitle.innerHTML = localStorage.getItem("title");
  postContent.innerHTML = localStorage.getItem("content");
  postImage.innerHTML = localStorage.getItem("image");
} else {
  alert("Could not retrieve storage");
}