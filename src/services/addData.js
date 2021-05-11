import axios from "axios";

const URL = "http://localhost:3004";

const addData = async ({ item, itemData }) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(itemData),
    };
    let response = await axios(`${URL}/${item}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let error = `Error ${err.response.status || "X"} : ${
      err.response.statusText ||
      `Se produjo un error al hacer POST en: "${URL}/${item}"`
    }`;
    let results = null;
    return { results, error };
  }
};

export { addData };
