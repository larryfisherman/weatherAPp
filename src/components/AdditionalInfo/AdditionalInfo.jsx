import React from 'react';
import './AdditionalInfo.css'


const AdditionalInfo = ({currentWeatherResult}) => {
  
    return (
     <div className="additionalInfo">
       <div className="maxTemp">
          <p>{Math.floor(currentWeatherResult.tempMax)}°C</p>
          <p>Temp. max.</p>
        </div>
        <div className="wind">
          <p>{(currentWeatherResult.wind)} mph</p>
          <p>Wind</p>
        </div>
        <div className="sunrise">
         <p>{currentWeatherResult.sunrise}</p> 
         <p>Sunrise</p>
        </div>
        <div className="lowestTemp">
          <p>{Math.floor(currentWeatherResult.tempMin)}°C</p>
          <p>Temp. min.</p>
        </div>
        <div className="pressure">
          <p>{currentWeatherResult.pressure} hPa</p>
          <p>Pressure</p>
        </div>
        <div className="sunset">
          <p>{currentWeatherResult.sunset}</p>
          <p>Sunset</p>  
        </div>
     </div>
    )

}

export default AdditionalInfo;