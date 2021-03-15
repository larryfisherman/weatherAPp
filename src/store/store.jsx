import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import apiReducer from '../duck/reducer'

const store = createStore(apiReducer, composeWithDevTools())

export default store;