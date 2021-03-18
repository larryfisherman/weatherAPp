import {
  GET_CURRENT_WEATHER,
  SET_ERROR,
  API_LOADED,
  GET_NEXTHOURS_WEATHER,
} from "../types/types";

const currentWeatherApi = {
  key: "5460cb53463514612fab001d3067fc4e",
  base: "https://api.openweathermap.org/data/2.5/",
};

const nextHoursApi = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "5fd2a278c2455f638b0fe4da35b1d244",
};

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${currentWeatherApi.base}weather?q=${city}&units=metric&APPID=${currentWeatherApi.key}`
      );
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }
      const resData = await res.json();
      dispatch({
        type: GET_CURRENT_WEATHER,
        payload: resData,
      });
      const nextHoursRes = await fetch(
        `${nextHoursApi.base}forecast?q=${city}&appid=${nextHoursApi.key}`
      );
      if (!nextHoursRes.ok) {
        const nextHoursResData = await nextHoursRes.json();
        throw new Error(nextHoursResData.message);
      }
      const nextHoursResData = await nextHoursRes.json();
      dispatch({
        type: GET_NEXTHOURS_WEATHER,
        payload: nextHoursResData,
      });
      dispatch({
        type: API_LOADED,
        payload: true,
      });
      onSuccess();
    } catch (error) {
      dispatch(setError(error.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
