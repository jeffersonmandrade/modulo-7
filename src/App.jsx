// import "./assets/styleGlobal.css";
// import Layout from "./components/layout";
// import Table from "./components/table";
// import { getCars, deleteCar } from "./service/api";
// import { useState, useEffect } from "react";
// import { column } from "./config/columns-cars";
// import Top from "./components/top"
// import Form from "./components/form"
// function App() {
//   const [cars, setCars] = useState([]);
//   const [form, setForm] = useState({})
//   const [isList, setList] = useState(true)
//   const [update, setUpdate] = useState(false)


//   const deleteRow = async (id) => {
//     try {
//       await deleteCar(id);
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//     } catch (error) {
//       console.error("Error deleting car:", error);
//     }
//   };

//   const fetchCars = async () => {
//     try {
//       const data = await getCars();
//       setCars(data);
//     } catch (error) {
//       console.error("Error fetching cars:", error);
//     }
//   };

//   const register = (value) => {
//     setList(value);
//   }

//   const edifForm = async (value) => {
//     console.log(value)
//     setForm(value)
//     setList(!isList)
//     setUpdate(true)
//   }

//   useEffect(() => {
//     fetchCars();
//   }, [isList, cars]);

//   return (
//     <Layout>

//       <Top showList={isList} register={register} funEditForm={edifForm}/>
//       { isList ?
//      (<Table column={column} data={cars} deleteFn={deleteRow} funEditForm={edifForm} />):
//      <Form showList={setList} form={form} setForm={setForm} update={update}/>
//     }
//     </Layout>
//   );
// }

// export default App;
