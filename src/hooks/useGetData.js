import { useState, useEffect } from "react";
import { getData } from "services/getData";

const useGetData = ({ type, id = "all" }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData({ type, id }).then(({ results, error }) => {
      setData(results);
      setError(error);
      setLoading(false);
    });
  }, [type, id]);

  return { data, error, loading };
};

export default useGetData;
