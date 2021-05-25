import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import GamesDynamicRow from "components/GamesComponents/GamesTable/GamesDynamicRow";
import GamesTableHead from "components/GamesComponents/GamesTable/GamesTableHead";
import DataContext from "contexts/DataContext";

const SearchResultsPage = () => {
  const location = useLocation();
  const query = location.search
    .slice(1)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const { games } = useContext(DataContext);

  const gamesFiltered = games.filter(
    (game) =>
      game.name.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
  );

  return (
    <>
      <h2>
        Search Results: "{query}" <br />
        <span>- Includes name and description results -</span>
      </h2>
      <GamesTableHead />
      {gamesFiltered.map((game) => (
        <GamesDynamicRow key={game.id} gameData={game} />
      ))}
    </>
  );
};

export default SearchResultsPage;
