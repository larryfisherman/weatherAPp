import React from 'react';
import { useSelector } from 'react-redux'
import store from '../store/store'

const WeatherData = () => {
    const state = store.getState();
    const temp = (state.data.main.temp - 273.15).toFixed(2);
    const location = state.weather.data.name;
    
}

export default WeatherData;