import React from "react";
import Error from "components/Error";
import Loader from "components/Loader";
import DynamicRow from "components/DynamicRow";
import GamesTableHead from "components/DynamicRow/GamesTableHead";
import useGetData from "hooks/useGetData";

function GamesPage() {
  const {
    data: games,
    error: errorGames,
    loading: loadingGames,
  } = useGetData({ type: "games" });

  const {
    data: consoles,
    error: errorConsoles,
    loading: loadingConsoles,
  } = useGetData({ type: "consoles" });

  return (
    <>
      <h2>Games</h2>
      {errorGames && <Error error={errorGames} />}
      {errorConsoles && <Error error={errorConsoles} />}
      {(loadingGames || loadingConsoles) && <Loader />}
      {games && consoles && (
        <>
          <GamesTableHead />
          {games.map((game) => (
            <DynamicRow
              key={game.id}
              type="games"
              data={game}
              consoles={consoles}
            />
          ))}
        </>
      )}
    </>
  );
}

export default GamesPage;
