import "../assets/styleGlobal.css";
import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../slices/car/actions";
function Home() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Table />
  );
}

export default Home;

