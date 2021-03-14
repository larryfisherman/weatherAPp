import React from 'react';

const currentWeatherApi = {
    key: "5460cb53463514612fab001d3067fc4e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const fiveDaysApi = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "5fd2a278c2455f638b0fe4da35b1d244"
  }

const API = () => {
    
    fetch(`${fiveDaysApi.base}forecast?q=${query}&appid=${fiveDaysApi.key}`)
              .then(res => res.json())
              .then (result => {
                console.log(result)
                const threeHoursTemp = (Math.floor(Math.round(result.list[0].main.temp) - 273.15))
                const threeHoursSky = result.list[0].weather[0].main
                const threeHoursDate = result.list[0].dt_txt
                const sixHoursTemp = (Math.floor(Math.round(result.list[12].main.temp) - 273.15))
                const  hours = Math.floor((result.list[0].weather[0].main / (1000 * 60 * 60)) % 24);
                const sixHoursSky = result.list[1].weather[0].main;
                const sixHoursDate = result.list[1].dt_txt
                const nineHoursTemp = (Math.floor(Math.round(result.list[2].main.temp) - 273.15 ))
                const nineHoursSky = result.list[2].weather[0].main
                const nineHoursDate = result.list[2].dt_txt
                shareNextHours({threeHoursTemp, threeHoursSky, threeHoursDate, sixHoursTemp, sixHoursSky, sixHoursDate, nineHoursTemp, nineHoursSky, nineHoursDate})
            })
            fetch(`${currentWeatherApi.base}weather?q=${query}&units=metric&APPID=${currentWeatherApi.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    console.log(result);
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

