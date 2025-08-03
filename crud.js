const MY_POST_KEY = 'myPosts';

function getAllPosts() {
  let postList = localStorage.getItem(MY_POST_KEY);
  if (!postList) {
    return [];
  }
  return JSON.parse(postList);
}

function getPost(postId) {
  for (const post of getAllPosts()) {
    console.log(post.id)
    if (post.id === postId) {
      return post;
    }
  }
  return null;
}

function savePost(postObj) {
  const allPosts = getAllPosts();
  for (let i = 0; i < allPosts.length; i++) {
    if (String(allPosts[i].id) === String(postObj.id)) {
      allPosts[i] = postObj;
      localStorage.setItem(MY_POST_KEY, JSON.stringify(allPosts));
      return;
    }
  }

  // if new post, append to the end
  allPosts.push(postObj);

  localStorage.setItem(MY_POST_KEY, JSON.stringify(allPosts));
}