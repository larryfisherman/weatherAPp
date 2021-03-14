import React from 'react';
import './WeatherBox.css'
import { Icons } from '../../icons';
import moment from 'moment';

const WeatherBox = ({currentWeatherResult}) => {
        return (
            <div className="locationDate">
                <span>{currentWeatherResult.location}</span>
                <span>{moment().format('dddd')}, {moment().format('LL')} </span>
                <span>{currentWeatherResult.temp}°C</span>
                <img src={Icons[currentWeatherResult.sky]} alt={[currentWeatherResult.sky]} />   
            </div>
        )

}

export default WeatherBox;