import React, { useState } from "react";
import "./App.css";
import SearchingBar from "./SearchingBar/SearchingBar";
import WeatherBox from "./WeatherBox/WeatherBox";
import WeekDays from "../components/WeekDays/WeekDays";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";

const App = () => {
  const [toggleClass, setToggleClass] = useState(false);

  const shareToggleClass = (res) => {
    setToggleClass(res);
  };

  return (
    <div className={toggleClass ? "activeApp" : "unActiveApp"}>
      <div className={toggleClass ? "activeHeader" : "unActiveHeader"}>
        <h1 className={toggleClass ? "active" : "unActive"}> Weather App </h1>
        <SearchingBar shareToggleClass={shareToggleClass} />
      </div>
      <div className={toggleClass ? "activeMain" : "unActiveMain"}>
        <WeatherBox />
        <AdditionalInfo shareToggleClass={shareToggleClass} />
        <WeekDays />
      </div>
    </div>
  );
};

export default App;
