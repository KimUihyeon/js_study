import * as actionTypes from "../actions/ActionTypes";

const initialState = {
    color : [200, 200, 200]
}

export default function Ui (state = initialState , action) {
    switch(action.type){
        case actionTypes.SET_COLOR :{
            return {
                ...state,
                color : action.color
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}