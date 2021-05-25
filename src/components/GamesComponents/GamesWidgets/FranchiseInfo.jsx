import React, { useContext } from "react";
import DataContext from "contexts/DataContext";
import { GamesCard } from "components/GamesComponents/GamesWidgets/styles";

const FranchiseInfo = () => {
  const { games, activeFranchise } = useContext(DataContext);
  const gamesOwned = games.filter((game) => game.owned);
  const gamesFinished = games.filter((game) => game.finished);

  const gamesOwnedPrices = gamesOwned.map((game) => game.price);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  gamesOwnedPrices.reduce(reducer);

  return (
    <GamesCard>
      <span>📋</span>
      <div className="DataContainer">
        <h3>{activeFranchise.name} Info</h3>
        <ul>
          <li>
            Total Games: <span>{games.length}</span>
          </li>
          <li>
            Finished Games: <span>{gamesFinished.length}</span>
          </li>
          <li>
            Owned Games: <span>{gamesOwned.length}</span>
          </li>
          <li>
            Franchise Value: $<span>{gamesOwnedPrices.reduce(reducer)}</span>
          </li>
        </ul>
      </div>
    </GamesCard>
  );
};

export default FranchiseInfo;
