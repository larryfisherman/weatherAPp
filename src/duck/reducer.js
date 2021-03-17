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

const inputSlice = createSlice({
	initialState: {
		inputValue: ''
	},
	name: 'searchingBar',
	reducers: {
		updateValue: (state, action) => {
			state.inputValue = action.payload;
		}
	}
})

export default inputSlice.reducer;
