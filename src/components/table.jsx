import { deleteCar } from "../service/api";
import { useNavigate } from "react-router-dom";


/* eslint-disable react/prop-types */

function Table({ column, data }) {
  const navigate = useNavigate();

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
              <button href="#" className="btn-update"
              onClick={() =>navigate(`/update/${row.id}`)}
              > Update
              </button>
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
