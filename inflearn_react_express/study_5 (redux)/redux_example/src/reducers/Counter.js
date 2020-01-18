import * as actionTypes from '../actions/ActionTypes'


// 초기상태 정의

const initialState = {
    number : 0
}


/// C# Dafault Parameter 랑 똑같음.
export default function counter(state = initialState , action){

    switch(action.type){
        case  actionTypes.INCREMENT :
             return { ...state,  number : state.number + 1 }
        case actionTypes.DECREMENT :
            return { ...state , number : state.number -1 }
        default : 
             return state  

             // action 이 정해지지 않았을 경우 
             // 다른 리듀서에서 처리할수 있는지 확인해야함.
    }

}