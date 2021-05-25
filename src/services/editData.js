import axios from "axios";
import { URL } from "./settings";

const editData = async ({ type, item }) => {
  try {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(item),
    };
    let response = await axios(`${URL}/${type}/${item.id}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let msg = `Se produjo un error al hacer PUT en: "${URL}/${type}/${item.id}"`;
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText || msg
    }`;
    let results = null;
    return { results, error };
  }
};

export { editData };
