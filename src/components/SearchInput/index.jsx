import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchForm } from "./styles";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: "/search", search: `?${keyword}` });
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a game"
        onChange={handleChange}
        value={keyword}
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </SearchForm>
  );
};

export default SearchInput;
