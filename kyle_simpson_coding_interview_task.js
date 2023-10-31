/* https://dummyjson.com/posts */

const posts = {
  7: [],
  35: [],
  49: [],
};

fetchPosts().catch((err) => console.log(err.toString()));

async function fetchPosts() {
  let skip = 0;
  while (true) {
    const rawResponse = await fetch(
      `https://dummyjson.com/posts?limit=50&skip=${skip}`
    );
    if (!rawResponse.ok) {
      throw new Error("Failed Get Request, Status Code: " + rawResponse.status);
    }
    const json = await rawResponse.json();
    for (const post of json.posts) {
      if (post.userId in posts && posts[post.userId].length < 3) {
        posts[post.userId].push(post);
        console.log(`User-Id: ${post.userId}, Title: ${post.title}`);
      }
    }

    const remaining = Object.values(posts).filter(
      (userPosts) => userPosts.length < 5
    );
    if (remaining.length === 0) break;

    skip += 50;
  }

  for (const post of posts) {
    console.log(post);
  }
}
