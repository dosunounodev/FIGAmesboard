import React, { useState } from 'react';
import DataContext from 'contexts/DataContext';
import useGetInitialData from 'hooks/useGetInitialData';
import useUpdateGames from 'hooks/useUpdateGames';

const DataProvider = ({ children }) => {
  const [franchises, setFranchises] = useState([]);
  const [activeFranchise, setActiveFranchise] = useState(null);
  const [consoles, setConsoles] = useState([]);
  const [games, setGames] = useState([]);
  const [collection, setCollection] = useState([]);

  const { loading } = useGetInitialData({
    setFranchises,
    setActiveFranchise,
    setConsoles,
    setGames,
    setCollection,
  });

  useUpdateGames({ activeFranchise, setGames });

  const data = {
    loading,
    franchises,
    setFranchises,
    activeFranchise,
    setActiveFranchise,
    consoles,
    setConsoles,
    games,
    setGames,
    collection,
    setCollection,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
