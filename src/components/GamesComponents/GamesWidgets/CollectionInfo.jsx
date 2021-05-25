import React, { useContext } from "react";
import DataContext from "contexts/DataContext";
import { GamesCard } from "components/GamesComponents/GamesWidgets/styles";

const CollectionInfo = () => {
  const { franchises, consoles, collection } = useContext(DataContext);

  return (
    <GamesCard>
      <span>🏆</span>
      <div className="DataContainer">
        <h3>Collection Info</h3>
        <ul>
          <li>
            Total Games: <span>{collection.totalGames}</span>
          </li>
          <li>
            Finished Games: <span>{collection.finishedGames}</span>
          </li>
          <li>
            Total Consoles: <span>{consoles.length}</span>
          </li>
          <li>
            Owned Games: <span>{collection.ownedGames}</span>
          </li>
          <li>
            Total Franchises: <span>{franchises.length}</span>
          </li>
          <li>
            Collection Value: $<span>{collection.totalOwnedValue}</span>
          </li>
        </ul>
      </div>
    </GamesCard>
  );
};

export default CollectionInfo;
