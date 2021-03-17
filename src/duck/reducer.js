import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	currentWeatherAPI: 
	{
		temp: '',
		tempMin: '',
		tempMax: '',
		sky: '',
		location: '',
		sunrise: '',
		sunset: '',
		country: '',
		wind: '',
		pressure: '',
	},
	fiveDaysForecatsAPI: 
	{

	}
}

const initialState = {
	inputValue: ''
}

const inputSlice = createSlice({
	initialState,
	name: 'searchingBar',
	reducers: {
		updateValue: (state, action) => {
			state.inputValue = action.payload;
		}
	}
})

export const { updateValue } = inputSlice.actions
export default inputSlice.reducer;