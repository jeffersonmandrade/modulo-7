import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  form: {}
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setForm:(state, action) => {
      state.forms = action.payload
    }
  }

});

export const { setCars, setForm } = carSlice.actions;

export default carSlice.reducer;
