import { combineReducers } from "redux";
import searchingBar from './duck/reducer'

const rootReducer = combineReducers({
    searchingBar,
  });

export default rootReducer;