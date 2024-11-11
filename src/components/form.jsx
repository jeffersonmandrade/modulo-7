/* eslint-disable react/prop-types */


function Form({submit, change, form }) {

  return (
    <div className="register">
      <div className="field">
        <label>Brand:</label>
        <input
          type="text"
          value={form.brand || ""}
          onChange={(e) => change("brand", e.target.value)}
          placeholder="Enter the Brand!"
          required
        />
      </div>
      <div className="field">
        <label>Model:</label>
        <input
          type="text"
          value={form.model || ""}
          onChange={(e) => change("model", e.target.value)}
          placeholder="Enter the Model!"
          required
        />
      </div>
      <div className="field">
        <label>Year:</label>
        <input
          type="number"
          value={form.year || ""}
          onChange={(e) => change("year", e.target.value)}
          placeholder="Enter the Year!"
          required
        />
      </div>
      <div className="field">
        <label>Fuel:</label>
        <input
          type="text"
          value={form.fuel || ""}
          onChange={(e) => change("fuel", e.target.value)}
          placeholder="Enter the Fuel!"
          required
        />
      </div>
      <div className="field">
        <label>Doors:</label>
        <input
         type="number"
          value={form.doors || ""}
          onChange={(e) => change("doors", e.target.value)}
          placeholder="Enter the number of Doors!"
          required
        />
      </div>
      <div className="field">
        <label>Price:</label>
        <input
         type="text"
          value={form.price || ""}
          onChange={(e) => change("price", e.target.value)}
          placeholder="Enter the Price!"
          required
        />
      </div>
      <div className="field">
        <button onClick={() => submit()}>{"Send"}</button>
      </div>
    </div>
  );
}

export default Form;