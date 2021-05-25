import sortByName from "helpers/sortByName";
import { useCallback, useEffect } from "react";
import { getData } from "services/getData";

const useUpdateGames = ({ activeFranchise, setGames }) => {
  const updateGames = useCallback(
    async (activeFranchise) => {
      const { results: gamesData, error: errorGames } = await getData({
        type: "game",
        parentType: "franchise",
        parentId: activeFranchise?.id,
      });
      errorGames
        ? alert(`Error searching Games ${errorGames}`)
        : setGames(gamesData?.sort(sortByName));
    },
    [setGames]
  );

  useEffect(() => {
    activeFranchise && updateGames(activeFranchise);
  }, [activeFranchise, updateGames]);
};

export default useUpdateGames;
