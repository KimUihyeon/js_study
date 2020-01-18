import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    color : [255, 200, 200]
}


/// 리듀서가 두개일떈  리듀서를 합쳐 줘야한다 .
/// 수동으로 합쳐두 되고  리듀서에서 합쳐주는 기능이 있다.

export default function ui(state = initialState , action){
    if(action.type = actionTypes.SET_COLOR){
        return { ...state, color: action.color }
    }
    else {
        return state;
    }
}