import React from "react";
import GamesTableForm from "components/GamesComponents/GamesTable/GamesTableForm";
import GamesTableData from "components/GamesComponents/GamesTable/GamesTableData";
import useDynamicRow from "hooks/useDynamicRow";

const GamesDynamicRow = ({ gameData }) => {
  const {
    isForm,
    setIsForm,
    inputValues,
    setInputValues,
    handleEdit,
    handleCancelEdit,
    handleDelete,
  } = useDynamicRow({
    gameData,
  });

  console.log(`render row ${gameData.id}`);
  return (
    <>
      {isForm ? (
        <GamesTableForm
          inputValues={inputValues}
          setInputValues={setInputValues}
          handleEdit={handleEdit}
          handleCancelEdit={handleCancelEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <GamesTableData
          setIsForm={setIsForm}
          inputValues={inputValues}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default GamesDynamicRow;
