import type from './types';
import update from 'immutability-helper';


const INITIAL_STATE = {
	searchingBar:
	{
		inputValue: ''
	},
	apiConnection: 
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
	}
		
}

const apiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case type.ADD_INPUT_VALUE:
			return update(state, { 
				searchingBar: { 
					inputValue: {$set: action.payload}
				  }
				});
			
		default:
			return state;
	}
}

export default apiReducer;
