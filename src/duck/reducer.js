import type from './types'

const INITIAL_STATE = {
    listName: "apiResult",
        inputValue: 
        [
            
        ],
}

const apiReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case type.ADD_INPUT_VALUE: 
            return {
                state, inputValue: [state, action.item]
            }
        default: 
            return state;
    }
    
}

export default apiReducer;