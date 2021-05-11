import React from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import DynamicRow from "../../components/DynamicRow";
import GamesTableHead from "../../components/DynamicRow/GamesTableHead";
import useGetData from "../../hooks/useGetData";

function GamesPage() {
  const { data: games, error, loading } = useGetData();

  return (
    <>
      <h2>Games</h2>
      {error && <Error error={error} />}
      {loading && <Loader />}
      {games && (
        <>
          <GamesTableHead />
          {games.map((game) => (
            <DynamicRow key={game.id} type="games" data={game} />
          ))}
        </>
      )}
    </>
  );
}

export default GamesPage;
