import { useState } from "react";
import { editData } from "../services/editData";
import { getData } from "../services/getData";
import { deleteData } from "../services/deleteData";
import initialValues from "../components/DynamicRow/initialValues";

const useDynamicRow = ({ type, data }) => {
  const [isForm, setIsForm] = useState(false);

  const initialInputValues = initialValues({ type, data });

  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editData({
      item: type,
      itemData: inputValues,
    });
    setIsForm(false);
  };

  const handleCancel = async () => {
    const { results } = await getData({ item: type, id: data.id });
    setInputValues(results[0]);
    setIsForm(false);
  };

  const handleDelete = async () => {
    let confirmacion = window.confirm("estas seguro?");
    confirmacion && deleteData({ item: type, id: data.id });
  };

  return {
    isForm,
    setIsForm,
    inputValues,
    setInputValues,
    handleSubmit,
    handleCancel,
    handleDelete,
  };
};

export default useDynamicRow;
