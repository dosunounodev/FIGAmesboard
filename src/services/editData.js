import axios from "axios";

const URL = "http://localhost:3004";

const editData = async ({ item, itemData }) => {
  try {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(itemData),
    };
    let response = await axios(`${URL}/${item}/${itemData.id}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let error = `Error ${err.response.status || "X"} : ${
      err.response.statusText ||
      `Se produjo un error al hacer PUT en: "${URL}/${item}/${itemData.id}"`
    }`;
    let results = null;
    return { results, error };
  }
};

export { editData };
