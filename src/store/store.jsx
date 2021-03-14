import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from '../duck/reducer'

const store = createStore(apiReducer, applyMiddleware(thunk))

export default store;