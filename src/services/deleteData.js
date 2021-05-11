import axios from "axios";

const URL = "http://localhost:3004";

const deleteData = async ({ item, id }) => {
  try {
    let options = {
      method: "DELETE",
    };
    let response = await axios(`${URL}/${item}/${id}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let error = `Error ${err.response.status || "X"} : ${
      err.response.statusText ||
      `Se produjo un error al hacer DELETE en: "${URL}/${item}/${id}"`
    }`;
    let results = null;
    return { results, error };
  }
};

export { deleteData };
