import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  rocketData: [],
};

const homeSlice = createSlice({
  name: "rocketsData",
  initialState,
  reducers: {
    getData: (state) => {
      state.loading = true
    },
    getDataSuccess: (state, action) => {
      state.loading = false
      state.error = false
      state.rocketData = action.payload
    },
    getDataError:(state, action)=>{
        state.loading = false
        state.error = true

    }
  }
});

export const { getData, getDataSuccess,getDataError } = homeSlice.actions;
export default homeSlice.reducer;

//fetch data

export const fetchData = ()=>{
    return async dispatch =>{
      dispatch(getData())
      try {
       const response = await fetch('https://api.spacexdata.com/v3/launches');
        const data = response.json();
        dispatch(data);
      } catch (error) {
        dispatch(getDataError)
      }
    }
}