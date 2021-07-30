import { useContext, useState } from 'react';
import DataContext from 'contexts/DataContext';
import { getData } from 'services/getData';
import { editData } from 'services/editData';
import { deleteData } from 'services/deleteData';

const useDynamicRow = ({ gameData }) => {
  const [isForm, setIsForm] = useState(false);
  const [inputValues, setInputValues] = useState(gameData);
  const { games, setGames } = useContext(DataContext);

  const handleEdit = async (e) => {
    e.preventDefault();

    const { error: errorGames, results: resultsGames } = await editData({
      type: 'game',
      item: inputValues,
    });

    if (errorGames) {
      alert(errorGames);
    } else {
      alert('Edited Succesful');
      const newGames = games.map((game) =>
        game.id === resultsGames.id ? resultsGames : game
      );
      setGames(newGames);
      setIsForm(false);
    }
  };

  const handleCancelEdit = async () => {
    const { error, results } = await getData({
      type: 'game',
      id: gameData.id,
    });
    error ? alert(error) : setInputValues(...results);
    setIsForm(false);
  };

  const handleDelete = async () => {
    let confirmacion = window.confirm('Are you Sure?');
    if (confirmacion) {
      const { error: errorGames } = await deleteData({
        type: 'game',
        id: gameData.id,
      });

      if (errorGames) {
        alert(errorGames);
      } else {
        alert('Deleted Succesful');
        const newGames = games.filter((game) => game.id !== inputValues.id);
        setGames(newGames);
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
