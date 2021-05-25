import React from "react";
import { GamesTable, GamesRow } from "./styles";

const GamesTableHead = () => {
  return (
    <GamesTable>
      <thead>
        <GamesRow>
          <th>Name</th>
          <th>Console</th>
          <th>Franchise/s</th>
          <th>Year</th>
          <th>Hours</th>
          <th>Description</th>
          <th>Acquired</th>
          <th>Price</th>
          <th>Bought</th>
          <th>Owned</th>
          <th>Finished</th>
          <th>Available</th>
          <th>Edit</th>
          <th>Remove</th>
        </GamesRow>
      </thead>
    </GamesTable>
  );
};

export default React.memo(GamesTableHead);
