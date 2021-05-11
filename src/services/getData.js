import axios from "axios";

const URL = "http://localhost:3004";

const getData = async ({ item, id }) => {
  try {
    let urlTarget = id === "all" ? `${URL}/${item}` : `${URL}/${item}/${id}`;
    let response = await axios.get(urlTarget);
    let results = await response.data;
    !Array.isArray(results) && (results = [results]);
    let error = null;
    return { results, error };
  } catch (err) {
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText ||
      `Se produjo un error al hacer GET en: "${URL}/${item}/${id}"`
    }`;
    let results = null;
    return { results, error };
  }
};

export { getData };
