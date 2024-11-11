import { useState } from "react"
import Form from "../components/form"
import {registerCar} from "../service/api"
import { useNavigate } from "react-router-dom"
function Register(){
  const[form, setForm] = useState({})
  const navigate = useNavigate();
  const setChange = (field, value) =>{
    setForm({
      ...form,
      [field]:value
    })

  }

  const register = async() =>{
    try {
      await registerCar(form)
      navigate("/")
    } catch {
      throw new Error("Error register!")
    }
  }

  return(
    <Form submit={register} form={form} change={setChange} />

  )

}

export default Register