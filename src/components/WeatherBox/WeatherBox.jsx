import React from 'react';
import './WeatherBox.css'
import { Icons } from '../../icons';


const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

const WeatherBox = ({currentWeatherResult}) => {
    
        return (
            <div className="locationDate">
                <span>{currentWeatherResult.location}</span>
                <span>{dateBuilder(new Date())}</span>
                <span>{currentWeatherResult.temp}°C</span>
                <img src={Icons[currentWeatherResult.sky]} alt={Icons[currentWeatherResult.sky]} />   
            </div>
        )

}

export default WeatherBox;