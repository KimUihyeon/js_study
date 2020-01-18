import * as actionType from './ActionTypes'

// action을 매번 생성하기 귀찮으니 Action Index 를 통해서 생성하도록 정의함.

export function increament(){
    return {
        type :  actionType.INCREMENT
    }
}

export function decrement(){
    return {
        type : actionType.DECREMENT
    }
}

export function setColor(color){
    return {
        type : actionType.SET_COLOR,
        color
    }
}