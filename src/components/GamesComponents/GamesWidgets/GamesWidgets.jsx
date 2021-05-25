import React from "react";
import FranchiseInfo from "components/GamesComponents/GamesWidgets/FranchiseInfo";
import FranchiseFilter from "components/GamesComponents/GamesWidgets/FranchiseFilter";
import CollectionInfo from "components/GamesComponents/GamesWidgets/CollectionInfo";
import { GamesWidgetsContainer } from "./styles";

const GamesWidgets = ({ setKeyword }) => {
  return (
    <GamesWidgetsContainer>
      <FranchiseInfo />
      <FranchiseFilter setKeyword={setKeyword} />
      <CollectionInfo />
    </GamesWidgetsContainer>
  );
};

export default React.memo(GamesWidgets);
