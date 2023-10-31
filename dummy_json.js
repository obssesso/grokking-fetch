async function findTallestUser() {
  const response = await fetch("https://dummyjson.com/users");
  const userJson = await response.json();
  return userJson.users.reduce((tallest, user) => {
    return user.height > tallest.height ? user : tallest;
  });
}

/* (async () => {
  const tallestUser = await findTallestUser();
  console.log(`Full Name: ${tallestUser.firstName} ${tallestUser.lastName} 
  Height: ${tallestUser.height}`);
})(); */

async function addNewUser({ firstName, lastName, age }) {
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age }),
  });
  const json = await response.json();
  /*   console.log(json); */
}

/* addNewUser({ firstName: "Gerhat", lastName: "Senf", age: 31 }); */

async function addNewUser2({ firstName, lastName, age }) {
  const rawReponse = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age }),
  });
  const json = await rawReponse.json();
  console.log(json);
}

/* addNewUser2({ firstName: "Gdot", lastName: "the rejected", age: "too old" }); */

async function getEQJSinformation() {
  const response = await fetch("https://eloquentjavascript.net/author", {
    headers: { Accept: "application/json" },
  });
  const json = await response.json();
  console.log(json);
}

getEQJSinformation();
