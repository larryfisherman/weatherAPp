import React from 'react';
import './WeatherBox.css'


const WeatherBox = ({result}) => {
    return (
        <div className="locationTemp">
            <span>{result.location}</span>
            <span>DATA</span>
        </div>
    )
}

export default WeatherBox;