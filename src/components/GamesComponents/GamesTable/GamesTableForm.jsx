import React, { useContext, useEffect } from "react";
import DataContext from "contexts/DataContext";
import { GamesForm, GamesTable, GamesRow } from "./styles";

const GamesTableForm = ({
  inputValues,
  setInputValues,
  handleEdit,
  handleCancelEdit,
  handleDelete,
}) => {
  useEffect(() => {
    const handleClick = () => {
      handleCancelEdit();
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleCancelEdit]);

  const { consoles, franchises } = useContext(DataContext);
  let initialFranchises = inputValues.franchises.map(
    (franchise) => franchise.id
  );

  return (
    <GamesForm
      id={inputValues.id}
      onSubmit={handleEdit}
      onKeyDown={(e) => e.key === "Escape" && handleCancelEdit()}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <GamesTable>
        <tbody>
          <GamesRow>
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
                  let consoleSelected = consoles.find(
                    (console) => console.id === Number(e.target.value)
                  );

                  setInputValues({
                    ...inputValues,
                    console: consoleSelected,
                  });
                }}
                value={inputValues.console.id}
              >
                {consoles.map((console) => (
                  <option key={console.id} value={console.id}>
                    {console.name}
                  </option>
                ))}
              </select>
            </td>

            <td>
              <select
                name="franchise"
                form={inputValues.id}
                multiple={true}
                onChange={(e) => {
                  const selectedIds = Array.from(
                    e.target.selectedOptions,
                    (option) => Number(option.value)
                  );

                  const franchisesShortData = franchises.map((franchise) => {
                    return { id: franchise.id, name: franchise.name };
                  });

                  const franchisesMatchs = selectedIds.map((id) =>
                    franchisesShortData.find((franchise) => franchise.id === id)
                  );

                  setInputValues({
                    ...inputValues,
                    franchises: franchisesMatchs,
                  });
                }}
                value={initialFranchises}
              >
                {franchises.map((franchise) => (
                  <option key={franchise.id} value={franchise.id}>
                    {franchise.name}
                  </option>
                ))}
              </select>
            </td>

            <td>
              <input
                type="text"
                name="year"
                form={inputValues.id}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    year: Number(e.target.value),
                  })
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
                    hours: Number(e.target.value),
                  })
                }
                value={inputValues.hours}
              />
            </td>

            <td>
              <textarea
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
                type="date"
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
                    price: Number(e.target.value),
                  })
                }
                value={inputValues.price}
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
                type="checkbox"
                name="owned"
                form={inputValues.id}
                onChange={() =>
                  setInputValues({
                    ...inputValues,
                    owned: !inputValues.owned,
                  })
                }
                checked={inputValues.owned}
              />
            </td>

            <td>
              <input
                type="checkbox"
                name="finished"
                form={inputValues.id}
                onChange={() =>
                  setInputValues({
                    ...inputValues,
                    finished: !inputValues.finished,
                  })
                }
                checked={inputValues.finished}
              />
            </td>

            <td>
              <input
                type="checkbox"
                name="available"
                form={inputValues.id}
                onChange={() =>
                  setInputValues({
                    ...inputValues,
                    available: !inputValues.available,
                  })
                }
                checked={inputValues.available}
              />
            </td>

            <td>
              <button type="submit">💾</button>
              <button type="reset" onClick={handleCancelEdit}>
                ❌
              </button>
            </td>

            <td>
              <button
                onClick={() => {
                  handleDelete();
                }}
              >
                🗑️
              </button>
            </td>
          </GamesRow>
        </tbody>
      </GamesTable>
    </GamesForm>
  );
};

export default GamesTableForm;
