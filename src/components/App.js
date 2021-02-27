import React, { useState } from 'react';
import './App.css';
import SearchingBar from './SearchingBar/SearchingBar'
import WeatherBox from './WeatherBox/WeatherBox'
import WeekDays from '../components/WeekDays/WeekDays'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';

const App = () =>  {

  const [result, setResult] = useState({})
  const [toggleClass, setToggleClass] = useState(false);
  const [date, setDate] = useState()
 
  const shareApi = (res) => {
    setResult(res)
  }
  
  const shareToggleClass = (res) => {
    setToggleClass(res)
  }

  const shareDate = (res) => {
    setDate(res);
  }
    
    console.log(result)

    return (
      <div className={toggleClass ? "activeApp" : "unActiveApp" }>
        <div className={toggleClass ? "activeHeader" : "unActiveHeader" }>
            <h1 className = {toggleClass ? "active" : "unActive" }> Weather App </h1>
            <SearchingBar shareApi = {shareApi} shareToggleClass = {shareToggleClass}/>
        </div>
        <div className={toggleClass ? "activeMain" : "unActiveMain" }>
            <WeatherBox result = {result} date = {date}/>
            <AdditionalInfo result = {result} shareToggleClass = {shareToggleClass}/>
            <WeekDays result = {result}/>
        </div>
    </div>
  )
}

export default App;
