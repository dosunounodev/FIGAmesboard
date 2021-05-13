import React from "react";
import { VisibleTable } from "./styles";

const GamesTableRow = ({ visible, setIsForm, inputValues, handleDelete }) => {
  let franchisesListName = inputValues.franchises.map((franchise) => {
    return franchise.name;
  });

  return (
    <VisibleTable visible={visible}>
      <tbody>
        <tr onDoubleClick={() => setIsForm(true)}>
          <td className="name">{inputValues.name}</td>
          <td className="console">{inputValues.console.name}</td>
          <td className="franchise">{franchisesListName.join(", ")}</td>
          <td className="year">{inputValues.year}</td>
          <td className="hours">{inputValues.hours}</td>
          <td className="description">
            {inputValues.description || "No Description"}
          </td>
          <td className="bought">{inputValues.bought}</td>
          <td className="acquired">{inputValues.acquired}</td>
          <td className="price">{inputValues.price}</td>
          <td className="owned">{inputValues.owned ? "true" : "false"}</td>
          <td className="finished">
            {inputValues.finished ? "true" : "false"}
          </td>
          <td className="available">
            {inputValues.available ? "true" : "false"}
          </td>

          <td>
            <button onClick={() => setIsForm(true)}>Edit</button>
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
    </VisibleTable>
  );
};

export default GamesTableRow;
