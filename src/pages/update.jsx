import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import Error from "../components/error"
import { useDispatch, useSelector } from "react-redux";
import {getOneCar} from "../slices/car/actions"

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car.form)

console.log("AQUI UPDATE PAGE",car)
useEffect(() => {
  dispatch(getOneCar(id));
}, [id, dispatch]);


  if(!car.id){
    return(
      <Error/>
    )
  }
  return (
    <Form isUpdate />
  );
}

export default Update;
