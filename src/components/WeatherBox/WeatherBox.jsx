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

const WeatherBox = ({result}) => {
    
        return (
            <div className="locationDate">
                <span>{result.location}</span>
                <span>{dateBuilder(new Date())}</span>
                <span>{result.temp}°C</span>
                <span>{Icons.result.sky}</span>    
            </div>
        )

}

export default WeatherBox;