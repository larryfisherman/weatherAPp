import React, { useState } from "react";
import "./App.css";
import SearchingBar from "./SearchingBar/SearchingBar";
import WeatherBox from "./WeatherBox/WeatherBox";
import WeekDays from "../components/WeekDays/WeekDays";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";

const App = () => {
  const [currentWeatherResult, setCurrentWeatherResult] = useState({});
  const [nextHours, setNextHours] = useState({});
  const [toggleClass, setToggleClass] = useState(false);

  const shareToggleClass = (res) => {
    setToggleClass(res);
  };

  const shareNextHours = (res) => {
    setNextHours(res);
  };

  return (
    <div className={toggleClass ? "activeApp" : "unActiveApp"}>
      <div className={toggleClass ? "activeHeader" : "unActiveHeader"}>
        <h1 className={toggleClass ? "active" : "unActive"}> Weather App </h1>
        <SearchingBar
          shareNextHours={shareNextHours}
          shareToggleClass={shareToggleClass}
        />
      </div>
      <div className={toggleClass ? "activeMain" : "unActiveMain"}>
        <WeatherBox />
        <AdditionalInfo
          currentWeatherResult
          shareToggleClass={shareToggleClass}
        />
        <WeekDays nextHours={nextHours} />
      </div>
    </div>
  );
};

export default App;
