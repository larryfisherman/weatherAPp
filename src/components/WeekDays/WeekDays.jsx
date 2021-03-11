import React from 'react';
import './WeekDays.css'
import { Icons } from '../../icons';

const WeekDays = ({nextHours}) => {
    
    return (
        <div className="weekDays">
            <div className="one">
                <img src={Icons[nextHours.threeHoursSky]} 
                alt = {Icons[nextHours.threeHoursSky]}/> 
                <span>{nextHours.threeHoursTemp} °C</span>
                <span>{nextHours.threeHoursDate}</span>
            </div>
            <div className="two"> 
                <img src={Icons[nextHours.sixHoursSky]} 
                alt = {Icons[nextHours.sixHoursSky]}/> 
                <span>{nextHours.sixHoursTemp} °C</span>
                <span>{nextHours.sixHoursDate}</span>
            </div>
                <div className="three"> 
                    <img src={Icons[nextHours.nineHoursSky]} 
                    alt = {Icons[nextHours.nineHoursSky]}/> 
                    <span>{nextHours.nineHoursTemp} °C</span>
                    <span>{nextHours.nineHoursDate}</span>
                    </div>
                <div className="four">  
                    <img src={Icons[nextHours.sixHoursSky]} 
                    alt = {Icons[nextHours.sixHoursSky]}/> 
                    <span>{nextHours.sixHoursTemp} °C</span>
                    <span>{nextHours.sixHoursDate}</span>
                </div>
                <div className="five">  
                    <img src={Icons[nextHours.sixHoursSky]} 
                    alt = {Icons[nextHours.sixHoursSky]}/> 
                    <span>{nextHours.sixHoursTemp} °C</span>
                    <span>{nextHours.sixHoursDate}</span>
                </div>
          </div>
    )
}

export default WeekDays;