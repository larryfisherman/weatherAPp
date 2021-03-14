import React from 'react';
import './WeekDays.css'
import { Icons } from '../../icons';
import moment from 'moment'

const WeekDays = ({nextHours}) => {
    
    return (
        <div className="weekDays">
            <div className="one">
                <img src={Icons[nextHours.threeHoursSky]} 
                alt = {Icons[nextHours.threeHoursSky]}/> 
                <span>{nextHours.threeHoursTemp} °C</span>
                <span>{moment().add(3, 'hours').calendar()}</span>
            </div>
            <div className="two"> 
                <img src={Icons[nextHours.sixHoursSky]} 
                alt = {Icons[nextHours.sixHoursSky]}/> 
                <span>{nextHours.sixHoursTemp} °C</span>
                <span>{moment().add(6, 'hours').calendar()}</span>
            </div>
            <div className="three"> 
                <img src={Icons[nextHours.nineHoursSky]} 
                alt = {Icons[nextHours.nineHoursSky]}/> 
                <span>{nextHours.nineHoursTemp} °C</span>
                <span>{moment().add(9, 'hours').calendar()}</span>
                </div>
            <div className="four">  
                <img src={Icons[nextHours.sixHoursSky]} 
                alt = {Icons[nextHours.sixHoursSky]}/> 
                <span>{nextHours.sixHoursTemp} °C</span>
                <span>{moment().add(12, 'hours').calendar()}</span>
                </div>
            <div className="five">  
                <img src={Icons[nextHours.sixHoursSky]} 
                alt = {Icons[nextHours.sixHoursSky]}/> 
                <span>{nextHours.sixHoursTemp} °C</span>
                <span>{moment().add(15, 'hours').calendar()}</span>
            </div>
          </div>
    )
}

export default WeekDays;