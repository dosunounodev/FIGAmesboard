import React from "react";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  return (
    <div>
      <h2>Mostrando resultados de: "{query}"</h2>
    </div>
  );
};

export default SearchResultsPage;
