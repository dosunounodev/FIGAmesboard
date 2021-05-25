import React, { useContext, useState } from "react";
import GamesWidgets from "components/GamesComponents/GamesWidgets/GamesWidgets";
import GamesTableHead from "components/GamesComponents/GamesTable/GamesTableHead";
import GamesDynamicRow from "components/GamesComponents/GamesTable/GamesDynamicRow";
import Loader from "components/Misc/Loader";
import DataContext from "contexts/DataContext";

const GamesPage = () => {
  console.log("render GamesPage");

  const { loading, games, activeFranchise } = useContext(DataContext);
  const [keyword, setKeyword] = useState("");
  const filteredGames = games.filter(
    (game) =>
      game.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(keyword) ||
      game.description
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(keyword)
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>
            🕹 Showing Games of{" "}
            <span>
              {activeFranchise?.name}{" "}
              <span>
                {keyword.length > 0 && `filtered by `}
                <span>{keyword.length > 0 && `"${keyword}"`}</span>
              </span>
            </span>
          </h2>
          <GamesWidgets setKeyword={setKeyword} />
          <GamesTableHead />
          {filteredGames.map((game) => (
            <GamesDynamicRow key={game.id} gameData={game} />
          ))}
        </>
      )}
    </>
  );
};

export default GamesPage;
