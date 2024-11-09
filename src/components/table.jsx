function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Fuel</th>
          <th>Doors</th>
          <th>Price</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Toyota</td>
          <td>Corolla</td>
          <td>2020</td>
          <td>Gasoline</td>
          <td>4</td>
          <td>$85,000</td>
          <td>
            <a href="#" className="btn-update">
              Update
            </a>
          </td>
          <td>
            <a href="#" className="btn-delete">
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Honda</td>
          <td>Civic</td>
          <td>2019</td>
          <td>Gasoline</td>
          <td>4</td>
          <td>$90,000</td>
          <td>
            <a href="#" className="btn-update">
              Update
            </a>
          </td>
          <td>
            <a href="#" className="btn-delete">
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ford</td>
          <td>Fusion</td>
          <td>2018</td>
          <td>Hybrid</td>
          <td>4</td>
          <td>$120,000</td>
          <td>
            <a href="#" className="btn-update">
              Update
            </a>
          </td>
          <td>
            <a href="#" className="btn-delete">
              Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Chevrolet</td>
          <td>Onix</td>
          <td>2021</td>
          <td>Gasoline</td>
          <td>4</td>
          <td>$65,000</td>
          <td>
            <a href="#" className="btn-update">
              Update
            </a>
          </td>
          <td>
            <a href="#" className="btn-delete">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
