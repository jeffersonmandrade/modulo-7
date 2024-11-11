import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h2>Car not found.</h2>
      <h5>Unable to find the requested car</h5>
      <br />
      <br />
      <Link to="/">Return to the Home Page</Link>
    </div>
  );
}

export default Error;
