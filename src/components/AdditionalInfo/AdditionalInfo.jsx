import React from 'react';
import './AdditionalInfo.css'


const AdditionalInfo = ({result}) => {
      
    if(result) {
        return (
          <div className="additionalInfo">
            <div className="maxTemp"> {Math.floor(result.tempMax)}°C</div>
            <div className="wind">{(result.wind).toFixed(2)} mph</div>
            <div className="sunrise">{result.sunrise}</div>
            <div className="lowestTemp">3°C</div>
            <div className="rain">70%</div>
            <div className="sunset">{result.sunset}</div>
        </div>
        )
      }
      else {
        return (
          <h1>ups</h1>
        )
      }
       

}

export default AdditionalInfo;