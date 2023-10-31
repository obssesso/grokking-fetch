const fetchCraig = async () => {
  try {
    const response = await fetch("https://www.craigslist.org/about/");
    const statusAsString = response.status.toString();
    if (statusAsString.match(/^4\d\d/)) {
      throw new HTTP404Error("404 Error");
    }
    const html = await response.text();
    if (statusAsString.match(/^2\d\d/)) {
      console.log("success");
    }
    console.log(response);
    console.log(html);
  } catch (error) {
    console.log("in");
    console.log(error.message);
  }
};

/* fetchCraig(); */

const fetchCraigPromise = () => {
  try {
    fetch("https://www.craigslist.org/about/")
      .then((response) => response.text())
      .then((html) => console.log(html));
  } catch (error) {
    console.log(error);
  }
};

fetchCraig();

class HTTP404Error extends Error {}
