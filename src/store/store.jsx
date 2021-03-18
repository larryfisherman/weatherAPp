import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import weatherReducer from "./reducers/weatherReducer";
const rootReducer = combineReducers({
  weather: weatherReducer,
  devTools: composeWithDevTools(),
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
