import { getCars, deleteCar,registerCar, updateCarRegister, getCarById } from "../../service/api";
import { setCars, setForm } from "./reducer";

export const getAllCars = () => async (dispatch) => {


  try {
    const data = await getCars();
    dispatch(setCars(data));
  } catch {
    console.error("Error get all cars");
  }
};

export const deleteRow = (id) => async (dispatch) => {
  try {
    await deleteCar(id);
    dispatch(getAllCars());
  } catch {
    console.error("Error delete car");
  }
}

export const registered = (car) => async (dispatch) => {
  try{
    await registerCar(car)
    dispatch(getAllCars())
  }catch {
    console.error("Error rigister car");
  }
}

export const update = (car) => async (dispatch) => {
  try{
    await updateCarRegister(car)
    dispatch(getAllCars())
  }catch {
    console.error("Error update car");
  }
}

export const getOneCar = (id) => async (dispatch) => {
  try {
    await getCarById(id);
    dispatch(getAllCars());
  } catch {
    console.error("Error get car by id");
  }
}
  export const setChange = (field, value) =>async(dispatch, getState) => {

    const detail = getState().car.form
    dispatch(
      setForm({
        ...detail,
        [field]:value
      })
    )
    }


    export const register = (editForm = false) => async (dispatch, getState) => {
      try {
          const car = getState().car.form;
          const action = editForm ? updateCarRegister : registerCar;

          await action(car);

          dispatch(getAllCars());

          return Promise.resolve();
      } catch (error) {
          console.error("Error registering form:", error);
          return Promise.reject();
      }
  };


