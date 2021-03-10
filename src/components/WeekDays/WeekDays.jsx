import React from 'react';
import './WeekDays.css'
import { Icons } from '../../icons';


const WeekDays = ({shareFiveDaysWeatherResult}) => {
    return (
        <div className="weekDays">
            <div className="monday">
                <img src={Icons[shareFiveDaysWeatherResult.sky]} 
                alt = {Icons[shareFiveDaysWeatherResult.sky]}/> 
            </div>
            <div className="tuesday"> Tuesday </div>
            <div className="wednesday"> Wednesday </div>
            <div className="thursday"> Thursday </div>
            <div className="friday"> Friday </div>
          </div>
    )
}

export default WeekDays;