import http from "../config/http";

export const getCars = async () => {
  try {
    const { data } = await http.get(`/cars`);
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const deleteCar = async (id) => {
  try {
    await http.delete(`/cars/${id}`);
  } catch (error) {
    console.error("Error delete cars:", error);
    return [];
  }
};

export const registerCar = async (car) => {
  try {
    await http.post(`/cars`, car);
  } catch (error) {
    console.error("Error registerCar cars:", error);
    return [];
  }
};

export const updateCarRegister = async (car) => {
  try {
    await http.patch(`/cars/${car.id}`, car);
  } catch (error) {
    console.error("Error updating car:", error);
    return [];
  }
}
  export const getCarById = async (id) => {
    try {
     const {data} = await http.get(`/cars/${id}`);
     console.log(data)
     return data
    } catch (error) {
      console.error("Error updating car:", error);
      return [];
    }
  }
