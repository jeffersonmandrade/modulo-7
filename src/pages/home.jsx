import "../assets/styleGlobal.css";
import Table from "../components/table";
import { getCars, deleteCar } from "../service/api";
import { useState, useEffect } from "react";
import { column } from "../config/columns-cars";
function Home() {
  const [cars, setCars] = useState([]);
  const [isList, setList] = useState(true)


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


  const edifForm = async () => {
    setList(!isList)
  }

  useEffect(() => {
    fetchCars();
  }, [isList, cars]);

  return (
    <Table column={column} data={cars} deleteFn={deleteRow} funEditForm={edifForm} />
  );
}

export default Home;

