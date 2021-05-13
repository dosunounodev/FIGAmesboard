import React, { useEffect } from "react";
import { VisibleForm } from "./styles";

const GamesForm = ({
  visible,
  inputValues,
  setInputValues,
  handleEdit,
  handleCancelEdit,
  handleDelete,
  consoles,
}) => {
  useEffect(() => {
    const handleClick = (e) => {
      handleCancelEdit();
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleCancelEdit]);

  return (
    <VisibleForm
      id={inputValues.id}
      onSubmit={handleEdit}
      onKeyDown={(e) => e.key === "Escape" && handleCancelEdit()}
      visible={visible}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                form={inputValues.id}
                onChange={(e) =>
                  setInputValues({ ...inputValues, name: e.target.value })
                }
                value={inputValues.name}
              />
            </td>

            <td>
              <select
                name="console"
                form={inputValues.id}
                onChange={(e) => {
                  let consoleNameSelected = e.target.value;
                  let consoleSelected = consoles.filter(
                    (console) => console.name === consoleNameSelected
                  );
                  let consoleIdSelected = consoleSelected[0].id;

                  setInputValues({
                    ...inputValues,
                    console: {
                      ...console,
                      id: consoleIdSelected,
                      name: consoleNameSelected,
                    },
                  });
                }}
                value={inputValues.console.name}
              >
                {consoles.map((console) => (
                  <option key={console.id} value={console.name}>
                    {console.name}
                  </option>
                ))}
              </select>
            </td>

            <td>
              <input
                type="text"
                name="franchise"
                form={inputValues.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    franchises: [
                      {
                        id: inputValues.franchises[0].id,
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
                form={inputValues.id}
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
              <button type="reset" onClick={handleCancelEdit}>
                Cancel
              </button>
            </td>

            <td>
              <button
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </VisibleForm>
  );
};

export default GamesForm;
