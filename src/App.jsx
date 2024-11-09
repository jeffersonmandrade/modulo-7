import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { getCars, deleteCar } from "./service/api";
import { useState, useEffect } from "react";
import { column } from "./config/columns-cars";

function App() {
  const [cars, setCars] = useState([]);

  const deleteRow = async (id) => {
    try {
      await deleteCar(id);
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const fetchCars = async () => {
    try {
      const data = await getCars();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Layout>
      <Table column={column} data={cars} deleteFn={deleteRow} />
    </Layout>
  );
}

export default App;
