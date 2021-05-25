import axios from "axios";
import { URL } from "./settings";

const deleteData = async ({ type, id }) => {
  try {
    let options = {
      method: "DELETE",
    };
    let response = await axios(`${URL}/${type}/${id}`, options);
    let results = await response.data;
    let error = null;
    return { results, error };
  } catch (err) {
    let msg = `Se produjo un error al hacer DELETE en: "${URL}/${type}/${id}"`;
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText || msg
    }`;
    let results = null;
    return { results, error };
  }
};

export { deleteData };
