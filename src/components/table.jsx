import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../slices/car/actions";
import { column }from "../config/columns-cars"



function Table() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.car);


  const deleteCar = (id) => dispatch(deleteRow(id))
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
        {cars.map((row, index) => (
          <tr key={index}>
            {column.map((col) => (
              <td key={col}>{row[col.toLowerCase()]}</td>
            ))}
            <td>
              <button
                href="#"
                className="btn-update"
                onClick={() => navigate(`/update/${row.id}`)}
              >
                <MdUpdate />
              </button>
            </td>
            <td>
              <button onClick={() => deleteCar(row.id)} className="btn-delete">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
