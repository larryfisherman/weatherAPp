import React, { useState } from 'react';
import './SearchingBar.css'

  const currentWeatherApi = {
    key: "5460cb53463514612fab001d3067fc4e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const fiveDaysApi = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "5fd2a278c2455f638b0fe4da35b1d244"
  }

  const SearchingBar = ({shareCurrentWeatherResult, shareToggleClass, shareFiveDaysWeatherResult}) => {

    const [toggleClass, setToggleClass] = useState(false);
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = event => {
        if(event.key === "Enter") {
            setToggleClass(true);
            fetch(`${fiveDaysApi.base}forecast?q=${query}&appid=${fiveDaysApi.key}`)
              .then(res => res.json())
              .then (result => {
                console.log(result)
                const temp = result.list[6].main.temp;
                const sky = result.list[6].weather[0].main;
                console.log(result.list[6].weather[0].main)
                shareFiveDaysWeatherResult({temp, sky})
            })
            fetch(`${currentWeatherApi.base}weather?q=${query}&units=metric&APPID=${currentWeatherApi.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    const temp = (Math.floor(result.main.temp));
                    const tempMin = result.main.temp_min
                    const tempMax = result.main.temp_max;
                    const location = result.name;
                    const sunrise = new Date(result.sys.sunrise * 1000).toISOString().substr(11, 8);
                    const sunset = new Date(result.sys.sunset * 1000).toISOString().substr(11, 8);
                    const country = result.sys.country;
                    const wind = result.wind.speed;
                    const pressure = result.main.pressure;
                    const sky = result.weather[0].main;
                    shareCurrentWeatherResult({tempMax, location, tempMin, sunrise, sunset, wind, country, pressure, temp, sky});
                    shareToggleClass({toggleClass})
                })
        }
    }

    return (
        <input type = "text"
          placeholder = "Search.."
          className = {toggleClass ? "Active" : "unActive"}
          onChange = {e => setQuery(e.target.value)}
          value = {query}
          onKeyPress = {search}
        />
    )
}

export default SearchingBar;