import React from "react";
import { useSelector } from "react-redux";
import "./WeatherBox.css";
import { Icons } from "../../icons";
import moment from "moment";

const WeatherBox = () => {
  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);
  const data = useSelector((state) => state.weather.currentWeatherData);

  if (isApiLoaded) {
    const temp = Math.floor(data.main.temp);
    const sky = data.weather[0].main;
    const country = data.sys.country;
    return (
      <div className="locationDate">
        <span>
          {data.name} - {country}
        </span>
        <span>
          {moment().format("dddd")}, {moment().format("LL")}{" "}
        </span>
        <span>{temp}°C</span>
        <img src={Icons[sky]} alt={[sky]} />
      </div>
    );
  } else {
    return (
      <>
        <h1>API ERROR</h1>
      </>
    );
  }
};

export default WeatherBox;
