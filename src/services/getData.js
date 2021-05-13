import axios from "axios";
import { URL } from "./settings";

const getData = async ({ type, id }) => {
  try {
    let urlTarget = id === "all" ? `${URL}/${type}` : `${URL}/${type}/${id}`;
    let response = await axios.get(urlTarget);
    let results = await response.data;
    !Array.isArray(results) && (results = [results]);
    let error = null;
    return { results, error };
  } catch (err) {
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText ||
      `Se produjo un error al hacer GET en: "${URL}/${type}/${id}"`
    }`;
    let results = null;
    return { results, error };
  }
};

export { getData };
