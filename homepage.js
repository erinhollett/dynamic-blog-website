// example code to seed the stuff into local storage // the blog posts...
const blogPosts = [];

blogPosts.push({
  title: "Example Title Hehe",
  content: "This is my epic blog post ya'll\nOn multiple lines?\nFor the win",
  images: ["https://dam.mediacorp.sg/image/upload/s--tYTqxptI--/c_crop,h_791,w_1054,x_208,y_1/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2025/01/13/moo_deng_ic_main_0.jpg?itok=CdYsW37P"],
  date: Date.now(),
  id: "exampleid",
});

// const blogPostJSON = JSON.stringify(blogPosts);
// localStorage.setItem("myPosts", blogPostJSON);
// ^ remove later, just for testing (://///

// need a unique id for each post

const savedPosts = localStorage.getItem('myPosts');
if (savedPosts) {
  const displayPosts = JSON.parse(savedPosts);

  const blogsList = document.querySelector('#blogs ul');
  blogsList.innerHTML = ""; 

  // THis loops through the posts to make each title a seperate list item
  displayPosts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;
    blogsList.appendChild(li);
  });
}