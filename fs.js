import * as fs from "node:fs/promises";

const fetchImage = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      //here every status could be checked for
      throw new Error("schaisinn passiert");
    }
    if (/^2\d\d/.match(response.status)) {
      console.log("success");
    }
    return await response.buffer();
  } catch (error) {}
};
