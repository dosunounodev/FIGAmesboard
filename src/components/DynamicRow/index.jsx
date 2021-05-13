import React from "react";
import GamesForm from "components/DynamicRow/GamesForm";
import GamesTableRow from "components/DynamicRow/GamesTableRow";
import useDynamicRow from "hooks/useDynamicRow";

const DynamicRow = ({ type, data, consoles }) => {
  const {
    visible,
    isForm,
    setIsForm,
    inputValues,
    setInputValues,
    handleEdit,
    handleCancelEdit,
    handleDelete,
  } = useDynamicRow({ type, data });

  return (
    <>
      {type === "games" &&
        (isForm ? (
          <GamesForm
            visible={visible}
            inputValues={inputValues}
            setInputValues={setInputValues}
            handleEdit={handleEdit}
            handleCancelEdit={handleCancelEdit}
            handleDelete={handleDelete}
            consoles={consoles}
          />
        ) : (
          <GamesTableRow
            visible={visible}
            setIsForm={setIsForm}
            inputValues={inputValues}
            handleDelete={handleDelete}
          />
        ))}
    </>
  );
};

export default DynamicRow;
