import React, { useState } from 'react';
import './App.css';
import SearchingBar from './SearchingBar/SearchingBar'
import WeatherBox from './WeatherBox/WeatherBox'
import WeekDays from '../components/WeekDays/WeekDays'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

const App = () =>  {

  const [currentWeatherResult, setCurrentWeatherResult] = useState({});
  const [fiveDaysWeatherResult, setFiveDaysWeatherResult] = useState({})
  const [toggleClass, setToggleClass] = useState(false);

 
  const shareCurrentWeatherResult = (res) => {
    setCurrentWeatherResult(res)
  }
  
  const shareToggleClass = (res) => {
    setToggleClass(res)
  }

  const shareFiveDaysWeatherResult = (res) => {
    setFiveDaysWeatherResult(res)
  }

    return (
      <div className={toggleClass ? "activeApp" : "unActiveApp" }>
        <div className={toggleClass ? "activeHeader" : "unActiveHeader" }>
            <h1 className = {toggleClass ? "active" : "unActive" }> Weather App </h1>
            <SearchingBar shareFiveDaysWeatherResult = {shareFiveDaysWeatherResult} shareCurrentWeatherResult = {shareCurrentWeatherResult} shareToggleClass = {shareToggleClass}/>
        </div>
        <div className={toggleClass ? "activeMain" : "unActiveMain" }>
            <WeatherBox currentWeatherResult = {currentWeatherResult}/>
            <AdditionalInfo currentWeatherResult = {currentWeatherResult} shareToggleClass = {shareToggleClass}/>
            <WeekDays shareFiveDaysWeatherResult = {fiveDaysWeatherResult}/>
        </div>
    </div>
  )
}

export default App;
