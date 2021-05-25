import { useContext, useState } from "react";
import DataContext from "contexts/DataContext";
import { getData } from "services/getData";
import { editData } from "services/editData";
import { deleteData } from "services/deleteData";

const useDynamicRow = ({ gameData }) => {
  const [isForm, setIsForm] = useState(false);
  const [inputValues, setInputValues] = useState(gameData);
  const { games, setGames, setConsoles, setFranchises } =
    useContext(DataContext);

  const handleEdit = async (e) => {
    e.preventDefault();

    const { error: errorGames, results: resultsGames } = await editData({
      type: "games",
      item: inputValues,
    });
    const { error: errorConsoles, results: resultsConsoles } = await getData({
      type: "consoles",
      id: "all",
    });
    const { error: errorFranchises, results: resultsFranchises } =
      await getData({ type: "Franchises", id: "all" });

    errorGames && alert(errorGames);
    errorConsoles && alert(errorConsoles);
    errorFranchises && alert(errorFranchises);

    if (!errorGames && !errorConsoles && !errorFranchises) {
      alert("editado con exito");
      const newGames = games.map((game) =>
        game.id === resultsGames.id ? resultsGames : game
      );
      setGames(newGames);
      setConsoles(resultsConsoles);
      setFranchises(resultsFranchises);
      setIsForm(false);
    }
  };

  const handleCancelEdit = async () => {
    const { error, results } = await getData({
      type: "games",
      id: gameData.id,
    });
    error ? alert(error) : setInputValues(...results);
    setIsForm(false);
  };

  const handleDelete = async () => {
    let confirmacion = window.confirm("estas seguro?");
    if (confirmacion) {
      const { error: errorGames } = await deleteData({
        type: "games",
        id: gameData.id,
      });
      const { error: errorConsoles, results: resultsConsoles } = await getData({
        type: "consoles",
        id: "all",
      });
      const { error: errorFranchises, results: resultsFranchises } =
        await getData({
          type: "franchises",
          id: "all",
        });

      errorGames && alert(errorGames);
      errorConsoles && alert(errorConsoles);
      errorFranchises && alert(errorFranchises);

      if (!errorGames && !errorConsoles && !errorFranchises) {
        alert("borrado con exito");
        const newGames = games.filter((game) => game.id !== inputValues.id);
        setGames(newGames);
        setConsoles(resultsConsoles);
        setFranchises(resultsFranchises);
      }
    }
  };

  return {
    isForm,
    setIsForm,
    inputValues,
    setInputValues,
    handleEdit,
    handleCancelEdit,
    handleDelete,
  };
};

export default useDynamicRow;
