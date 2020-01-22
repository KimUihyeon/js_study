import * as actionTypes from "../actions/ActionTypes";

let initialState = {
    number : 0
}

export default function Counter (state = initialState, action) {
    switch(action.type){
        case actionTypes.DECREMENT : {
            return {
                ...state,
                number : state.number - 1
            }
        }
        case actionTypes.INCREMNET : {
            return {
                ...state,
                number : state.number + 1
            }
        }
        default : {
            return state
        }
    }
}