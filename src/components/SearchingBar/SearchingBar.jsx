import React, { useState } from "react";
import "./SearchingBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/actions/weatherActions";

const SearchingBar = ({ shareToggleClass, togglePopupStatus }) => {
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useState(false);
  const [query, setQuery] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      if (query) {
        dispatch(getWeather(query));
        setToggleClass(true);
        shareToggleClass({ toggleClass });
      } else {
        togglePopupStatus(true);
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
