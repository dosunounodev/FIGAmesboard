import React from "react";

const GamesTableRow = ({ inputValues, isForm, setIsForm, handleDelete }) => {
  return (
    <table>
      <tbody>
        <tr onDoubleClick={() => setIsForm(!isForm)}>
          <td className="name">{inputValues.name}</td>
          <td className="console">{inputValues.console.name}</td>
          <td className="franchise">{inputValues.franchises[0].name}</td>
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
            <button onClick={() => setIsForm(!isForm)}>Edit</button>
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
  );
};

export default GamesTableRow;
