import React, {useState} from 'react';
import './AdditionalInfo.css'


const AdditionalInfo = ({result, shareToggleClass}) => {

  const [api, setApi] = useState(false);
  
  const giveApi = (shareToggleClass) => {
    setApi(shareToggleClass)
  }

    return (
     <div className="additionalInfo">
       <div className="maxTemp"> 
          <p>{Math.floor(result.tempMax)}°C</p>
          <p>Temp. max.</p>
        </div>
        <div className="wind">
          <p>{(result.wind)} mph</p>
          <p>Wind</p>
        </div>
        <div className="sunrise">
         <p>{result.sunrise}</p> 
         <p>Sunrise</p>
        </div>
        <div className="lowestTemp">
          <p>{Math.floor(result.tempMin)}°C</p>
          <p>Temp. min.</p>
        </div>
        <div className="rain">
          <p>{result.pressure} hPa</p>
          <p>Pressure</p>
        </div>
        <div className="sunset">
          <p>{result.sunset}</p>
          <p>Sunset</p>  
        </div>
     </div>
    )

}

export default AdditionalInfo;