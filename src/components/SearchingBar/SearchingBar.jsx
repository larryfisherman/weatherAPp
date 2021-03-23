import React, { useState } from "react";
import "./SearchingBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/actions/weatherActions";

const SearchingBar = ({ shareToggleClass }) => {
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useState(false);
  const [query, setQuery] = useState("");

  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);

  const search = (event) => {
    if (event.key === "Enter") {
      dispatch(getWeather(query));
      if (isApiLoaded) {
        setToggleClass(true);
        shareToggleClass({ toggleClass });
      } else {
        return;
      }
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
