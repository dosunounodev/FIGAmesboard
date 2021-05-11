import React from "react";

const FormRow = ({
  isForm,
  setIsForm,
  gameData,
  inputValues,
  setInputValues,
  handleSubmit,
  handleCancel,
  handleDelete,
}) => {
  return (
    <form id={gameData.id} onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr onDoubleClick={() => setIsForm(!isForm)}>
            <td>
              <input
                type="text"
                name="name"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({ ...inputValues, name: e.target.value })
                }
                value={inputValues.name}
              />
            </td>

            <td>
              <input
                type="text"
                name="console"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    console: { ...console, name: e.target.value },
                  })
                }
                value={inputValues.console.name}
              />
            </td>

            <td>
              <input
                type="text"
                name="franchise"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    franchises: [
                      {
                        id: gameData.franchises[0].id,
                        name: e.target.value,
                      },
                    ],
                  })
                }
                value={inputValues.franchises[0].name}
              />
            </td>

            <td>
              <input
                type="text"
                name="year"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({ ...inputValues, year: e.target.value })
                }
                value={inputValues.year}
              />
            </td>

            <td>
              <input
                type="text"
                name="hours"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    hours: e.target.value,
                  })
                }
                value={inputValues.hours}
              />
            </td>

            <td>
              <input
                type="text"
                name="description"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    description: e.target.value,
                  })
                }
                value={inputValues.description}
              />
            </td>

            <td>
              <input
                type="text"
                name="bought"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    bought: e.target.value,
                  })
                }
                value={inputValues.bought}
              />
            </td>

            <td>
              <input
                type="text"
                name="acquired"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    acquired: e.target.value,
                  })
                }
                value={inputValues.acquired}
              />
            </td>

            <td>
              <input
                type="text"
                name="price"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    price: e.target.value,
                  })
                }
                value={inputValues.price}
              />
            </td>

            <td>
              <input
                type="text"
                name="owned"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    owned: e.target.value,
                  })
                }
                value={inputValues.owned}
              />
            </td>

            <td>
              <input
                type="text"
                name="finished"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    finished: e.target.value,
                  })
                }
                value={inputValues.finished}
              />
            </td>

            <td>
              <input
                type="text"
                name="available"
                form={gameData.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    available: e.target.value,
                  })
                }
                value={inputValues.available}
              />
            </td>

            <td>
              <button type="submit">Save</button>
              <button type="reset" onClick={handleCancel}>
                Cancel
              </button>
            </td>

            <td>
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default FormRow;
