import React, { useState } from "react";
import "./SearchingBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/actions/weatherActions";

const SearchingBar = ({ shareToggleClass, togglePopupStatus }) => {
  const dispatch = useDispatch();
  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);
  const [toggleClass, setToggleClass] = useState(false);
  const [query, setQuery] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      dispatch(getWeather(query));
      if (query) {
        setToggleClass(true);
        shareToggleClass({ toggleClass });
      } else {
        togglePopupStatus(true);
      }
      console.log(isApiLoaded);
    }
  };
  return (
    <input
      type="text"
      placeholder="Search.."
      className={toggleClass ? "Active" : "unActive"}
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
    />
  );
};

export default SearchingBar;
