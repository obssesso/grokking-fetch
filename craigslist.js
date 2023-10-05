const fetchCraig = async () => {
  const response = await fetch("https://www.craigslist.org/about/");
  const html = await response.text();
  console.log(html);
};

/* fetchCraig(); */

const fetchCraigPromise = () => {
  fetch("https://www.craigslist.org/about/")
    .then((response) => response.text())
    .then((html) => console.log(html));
};

fetchCraigPromise();
