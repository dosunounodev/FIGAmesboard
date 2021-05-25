import { getData } from "./getData";

const getInitialData = async () => {
  try {
    const { results: franchisesData, error: errorFranchises } = await getData({
      type: "franchise",
    });

    const franchiseDefault = await franchisesData?.find(
      (franchise) => franchise.default
    );

    const { results: consolesData, error: errorConsoles } = await getData({
      type: "console",
    });

    const { results: gamesData, error: errorGames } = await getData({
      type: "game",
      parentType: "franchise",
      parentId: franchiseDefault?.id,
    });

    const { results: collectionData, error: errorCollection } = await getData({
      type: "collection",
    });

    const results = {
      franchisesData,
      franchiseDefault,
      consolesData,
      gamesData,
      collectionData,
    };
    const error = {
      errorFranchises,
      errorConsoles,
      errorGames,
      errorCollection,
    };

    return { results, error };
  } catch (e) {
    const error = { errorMsg: `Error at Service: -GET INITIAL DATA- ${e}` };
    const results = null;

    return { results, error };
  }
};

export { getInitialData };
