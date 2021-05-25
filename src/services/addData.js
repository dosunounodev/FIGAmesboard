import axios from "axios";
import { URL } from "./settings";

const addData = async ({ type, item }) => {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(item),
    };
    let response = await axios(`${URL}/${type}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let msg = `Se produjo un error al hacer POST en: "${URL}/${type}"`;
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText || msg
    }`;
    let results = null;
    return { results, error };
  }
};

export { addData };
