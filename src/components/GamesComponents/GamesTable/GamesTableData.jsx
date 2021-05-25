import React from "react";
import { GamesTable, GamesRow } from "./styles";

const GamesTableData = ({ setIsForm, inputValues, handleDelete }) => {
  let franchisesListName = inputValues.franchises
    .sort(compare)
    .map((franchise) => franchise.name);

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <GamesTable>
      <tbody>
        <GamesRow onDoubleClick={() => setIsForm(true)}>
          <td className="name">{inputValues.name}</td>
          <td className="console">{inputValues.console.name}</td>
          <td className="franchises">{franchisesListName.join(", ")}</td>
          <td className="year">{inputValues.year}</td>
          <td className="hours">{inputValues.hours}</td>
          <td className="description">
            {inputValues.description || "No Description"}
          </td>
          <td className="acquired">{inputValues.acquired}</td>
          <td className="price">{inputValues.price}</td>
          <td className="bought">{inputValues.bought}</td>
          <td className="owned">{inputValues.owned ? "✔️" : "❌"}</td>
          <td className="finished">{inputValues.finished ? "✔️" : "❌"}</td>
          <td className="available">{inputValues.available ? "✔️" : "❌"}</td>

          <td>
            <button onClick={() => setIsForm(true)}>✍️</button>
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
  );
};

export default GamesTableData;
