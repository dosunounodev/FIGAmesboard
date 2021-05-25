import axios from "axios";
import { URL } from "./settings";

const getData = async ({
  type,
  id = "all",
  parentType = null,
  parentId = null,
}) => {
  let urlTarget;

  parentType
    ? (urlTarget = `${URL}/${parentType}/${parentId}/${type}`)
    : (urlTarget = id === "all" ? `${URL}/${type}` : `${URL}/${type}/${id}`);

  try {
    let response = await axios.get(urlTarget);
    let results = await response.data;
    !Array.isArray(results) && (results = [results]);
    let error = null;
    return { results, error };
  } catch (err) {
    let msg = `Se produjo un error al hacer GET en: "${URL}/${type}/${id}"`;
    let error = `Error ${err.response?.status || "X"} : ${
      err.response?.statusText || msg
    }`;
    let results = null;
    return { results, error };
  }
};

export { getData };
