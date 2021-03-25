import React, { useState, useEffect } from "react";
import "./SearchingBar.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/actions/weatherActions";

const SearchingBar = ({ shareToggleClass }) => {
  const dispatch = useDispatch();
  const [toggleClass, setToggleClass] = useState(false);
  const [query, setQuery] = useState("");
  const [apiTrobule, setApiTrobule] = useState(false);
  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);

  const search = (event) => {
    if (event.key === "Enter") {
      setApiTrobule(false);
      dispatch(getWeather(query));
      if (query) {
        setToggleClass(true);
        shareToggleClass({ toggleClass });
      } else {
        setApiTrobule(true);
      }
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        className={toggleClass ? "Active" : "unActive"}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <span className={apiTrobule ? "apiTrobuleActive" : "apiTrobuleUnactive"}>
        You forgot to pass the city or the city doesn't exist!
      </span>
    </>
  );
};

export default SearchingBar;
