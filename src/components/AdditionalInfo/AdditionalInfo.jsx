import React from "react";
import { useSelector } from "react-redux";
import "./AdditionalInfo.css";

const AdditionalInfo = () => {
  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);
  const data = useSelector((state) => state.weather.currentWeatherData);

  if (isApiLoaded) {
    const sunrise = new Date(data.sys.sunrise * 1000)
      .toISOString()
      .substr(11, 8);
    const sunset = new Date(data.sys.sunset * 1000).toISOString().substr(11, 8);
    const wind = data.wind.speed;
    const pressure = data.main.pressure;
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;

    return (
      <div className="additionalInfo">
        <div className="maxTemp">
          <p>{Math.floor(tempMax)}°C</p>
          <p>Temp. max.</p>
        </div>
        <div className="wind">
          <p>{wind} mph</p>
          <p>Wind</p>
        </div>
        <div className="sunrise">
          <p>{sunrise}</p>
          <p>Sunrise</p>
        </div>
        <div className="lowestTemp">
          <p>{Math.floor(tempMin)}°C</p>
          <p>Temp. min.</p>
        </div>
        <div className="pressure">
          <p>{pressure} hPa</p>
          <p>Pressure</p>
        </div>
        <div className="sunset">
          <p>{sunset}</p>
          <p>Sunset</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AdditionalInfo;
