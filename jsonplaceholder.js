const fetchAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (error) {
    console.log(error);
  }
};

fetchAsync();
