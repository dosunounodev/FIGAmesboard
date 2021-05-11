import { useState, useEffect } from "react";
import { getData } from "../services/getData";

const useGetData = (id = "all") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData({ item: "games", id }).then(({ results, error }) => {
      setData(results);
      setError(error);
      setLoading(false);
    });
  }, [id]);
  return { data, error, loading };
};

export default useGetData;
