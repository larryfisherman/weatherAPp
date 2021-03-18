import {
  GET_CURRENT_WEATHER,
  SET_ERROR,
  API_LOADED,
  GET_NEXTHOURS_WEATHER,
} from "../types/types";

const initialState = {
  isApiLoaded: false,
  currentWeatherData: {},
  fiveDaysWeatherData: {},
  error: "",
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return {
        currentWeatherData: action.payload,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // eslint-disable-next-line
    case API_LOADED:
      return {
        ...state,
        isApiLoaded: true,
      };
    case GET_NEXTHOURS_WEATHER:
      return {
        ...state,
        fiveDaysWeatherData: action.payload,
      };
    default:
      return state;
  }
};
