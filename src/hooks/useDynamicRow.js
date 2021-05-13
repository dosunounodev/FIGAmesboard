import { useState } from "react";
import { editData } from "services/editData";
import { getData } from "services/getData";
import { deleteData } from "services/deleteData";

const useDynamicRow = ({ type, data }) => {
  const [visible, setVisible] = useState(true);
  const [isForm, setIsForm] = useState(false);
  const [inputValues, setInputValues] = useState(data);

  const handleEdit = async (e) => {
    e.preventDefault();
    const { error, results } = await editData({
      type,
      item: inputValues,
    });
    error ? alert(error) : setInputValues(results);
    setIsForm(false);
  };

  const handleCancelEdit = async () => {
    const { error, results } = await getData({ type, id: data.id });
    error ? alert(error) : setInputValues(...results);
    setIsForm(false);
  };

  const handleDelete = async () => {
    let confirmacion = window.confirm("estas seguro?");
    if (confirmacion) {
      const { error } = await deleteData({ type, id: data.id });
      if (error) {
        alert(error);
      } else {
        alert("borrado con exito");
        setVisible(false);
      }
    }
  };

  return {
    visible,
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
