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
        <img src={Icons[sky]} alt={[sky]} />
        <span>{temp}°C</span>
        <span>
          {data.name} - {country}
        </span>
        <span>
          {moment().format("dddd")}, {moment().format("LL")}{" "}
        </span>
      </div>
    );
  } else {
    return null;
  }
};

export default WeatherBox;
