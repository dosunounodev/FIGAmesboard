import React, { useContext } from "react";
import DataContext from "contexts/DataContext";
import { GamesCard } from "components/GamesComponents/GamesWidgets/styles";

const FranchiseFilter = ({ setKeyword }) => {
  const { franchises, activeFranchise, setActiveFranchise } =
    useContext(DataContext);

  const handleSelectChange = (e) => {
    const selectedFranchise = franchises.find(
      (franchise) => franchise.id === Number(e.target.value)
    );
    setActiveFranchise(selectedFranchise);
  };

  const handleInputChange = (e) => {
    setKeyword(
      e.target.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  };

  return (
    <GamesCard>
      <span>📌</span>
      <div className="DataContainer">
        <h3>Franchise Filter</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>Filter 📚</span>
            <select onChange={handleSelectChange} value={activeFranchise.id}>
              {franchises.map((franchise) => (
                <option key={franchise.id} value={franchise.id}>
                  {franchise.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>Search 🔍</span>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder={`Search a game in ${activeFranchise.name}`}
            />
          </div>
        </form>
      </div>
    </GamesCard>
  );
};

export default FranchiseFilter;
