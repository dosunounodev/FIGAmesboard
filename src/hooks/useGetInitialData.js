import { useEffect, useState } from "react";
import { getInitialData } from "services/getInitialData";
import sortByName from "helpers/sortByName";

const useGetInitialData = ({
  setFranchises,
  setActiveFranchise,
  setConsoles,
  setGames,
  setCollection,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getInitialData().then(({ results, error }) => {
      if (error.errorMsg) {
        alert(error.errorMsg);
      } else {
        error.errorConsoles
          ? alert(`Error searching Consoles ${error.errorConsoles}`)
          : setConsoles(results?.consolesData?.sort(sortByName));

        error.errorFranchises
          ? alert(`Error searching Franchises ${error.errorFranchises}`)
          : setFranchises(results?.franchisesData?.sort(sortByName));

        error.errorGames
          ? alert(`Error searching Games ${error.errorGames}`)
          : setGames(results?.gamesData?.sort(sortByName));

        error.errorCollection
          ? alert(`Error searching Collection ${error.errorGames}`)
          : setCollection(...results?.collectionData);

        results.franchiseDefault &&
          setActiveFranchise(results.franchiseDefault);
      }
      setLoading(false);
    });
  }, []);
  return { loading };
};

export default useGetInitialData;
