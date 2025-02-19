import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    weatherData: null,
    errror: null
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherData(state, action){
            state.weatherData = action.payload;
        },
        setError(state, action){
            action.payload;
        },
    }
});

export const {fetchWeatherData, setError} = weatherSlice.actions;
export default weatherSlice.reducer

