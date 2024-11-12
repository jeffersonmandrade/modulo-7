/* eslint-disable react/prop-types */


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {register,setChange} from "../slices/car/actions"


function Form({ isUpdate }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((state) => state.car.form)

  const change = (field, value) => dispatch(setChange(field,value))

  const submitForm = () => {
    try {
      dispatch(register(isUpdate))
      navigate("/")
    } catch  {
      console.error("Error send form.")
    }
  }

  return (
    <div className="register">
      <div className="field">
        <label>Brand:</label>
        <input
          type="text"
          value={form?.brand || ""}
          onChange={(e) => change("brand", e.target.value)}
          placeholder="Enter the Brand!"
          required
        />
      </div>
      <div className="field">
        <label>Model:</label>
        <input
          type="text"
          value={form?.model || ""}
          onChange={(e) => change("model", e.target.value)}
          placeholder="Enter the Model!"
          required
        />
      </div>
      <div className="field">
        <label>Year:</label>
        <input
          type="number"
          value={form?.year || ""}
          onChange={(e) => change("year", e.target.value)}
          placeholder="Enter the Year!"
          required
        />
      </div>
      <div className="field">
        <label>Fuel:</label>
        <input
          type="text"
          value={form?.fuel || ""}
          onChange={(e) => change("fuel", e.target.value)}
          placeholder="Enter the Fuel!"
          required
        />
      </div>
      <div className="field">
        <label>Doors:</label>
        <input
         type="number"
          value={form?.doors || ""}
          onChange={(e) => change("doors", e.target.value)}
          placeholder="Enter the number of Doors!"
          required
        />
      </div>
      <div className="field">
        <label>Price:</label>
        <input
         type="text"
          value={form?.price || ""}
          onChange={(e) => change("price", e.target.value)}
          placeholder="Enter the Price!"
          required
        />
      </div>
      <div className="field">
        <button onClick={() => submitForm()}>{"Send"}</button>
      </div>
    </div>
  );
}

export default Form;
