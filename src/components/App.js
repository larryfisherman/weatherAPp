import React, { useState } from "react";
import "./App.css";
import SearchingBar from "./SearchingBar/SearchingBar";
import WeatherBox from "./WeatherBox/WeatherBox";
import NextHours from "./NextHours/nextHours";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Popup from "./Popup/Popup";

const App = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const [togglePopup, setTogglePopup] = useState(false);

  const shareToggleClass = (res) => {
    setToggleClass(res);
  };

  const togglePopupStatus = (res) => {
    setTogglePopup(res);
  };

  console.log(toggleClass);
  return (
    <div className={toggleClass ? "activeApp" : "unActiveApp"}>
      <div className={toggleClass ? "activeHeader" : "unActiveHeader"}>
        <h1 className={toggleClass ? "active" : "unActive"}> Weather App </h1>
        <SearchingBar
          shareToggleClass={shareToggleClass}
          togglePopupStatus={togglePopupStatus}
        />
      </div>
      <div className={toggleClass ? "activeMain" : "unActiveMain"}>
        <WeatherBox />
        <AdditionalInfo shareToggleClass={shareToggleClass} />
        <NextHours />
      </div>
      <Popup trigger={togglePopup} />
    </div>
  );
};

export default App;
