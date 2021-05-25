import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchForm, TogglerButton } from "./styles";

const SearchInput = ({ active, setActive }) => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: "/search", search: `?${keyword}` });
  };

  const handleToggleMenu = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search (In All Franchises)"
        onChange={handleChange}
        value={keyword}
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
      <TogglerButton active={active} onClick={handleToggleMenu}>
        MENU
      </TogglerButton>
    </SearchForm>
  );
};

export default SearchInput;
