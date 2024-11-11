import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCarRegister, getCarById } from "../service/api";
import Form from "../components/form";
import Error from "../components/error"
function Update() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  const setChange = (field, value) => {
    setCar((prevCar) => ({
      ...prevCar,
      [field]: value
    }));
  };

  const updateCar = async () => {
    try {
      await updateCarRegister(car);
      setCar({});
      navigate("/");
    } catch (error) {
      console.error("Error updating car:", error);
      throw new Error("Error update!");
    }
  };

  useEffect(() => {
    (async () => {
      const carData = await getCarById(id);
      console.log(car)
      setCar(carData);
    })();
  }, [id]);

  if(!car.id){
    return(
      <Error/>
    )
  }
  return (
    <Form submit={updateCar} change={setChange} form={car} />
  );
}

export default Update;
