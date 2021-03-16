import type from './types';

const INITIAL_STATE = {
	inputValue: ''
}

const apiReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case type.ADD_INPUT_VALUE:
			return {
				...state, inputValue: [ ...state.inputValue, action.item ]
			};
		default:
			return state;
	}
}

export default apiReducer;
