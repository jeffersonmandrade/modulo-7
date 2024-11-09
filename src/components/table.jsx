import { deleteCar } from "../service/api";

/* eslint-disable react/prop-types */

function Table({ column, data }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map((col) => (
            <th key={col}>{col}</th>
          ))}
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {column.map((col) => (
              <td key={col}>{row[col.toLowerCase()]}</td>
            ))}
            <td>
              <a href="#" className="btn-update">
                Update
              </a>
            </td>
            <td>
                <button
                onClick={() =>deleteCar(row.id)}
                className="btn-delete"
                >
                  Delete
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default Table;
