import * as actionType from "./ActionTypes";


export let increment = () =>{
    return {
        type : actionType.INCREMNET
    }
}

export let decrement = () =>{
    return {
        type : actionType.DECREMENT
    }
}

export let setColor = (color)=>{
    return {
        type : actionType.SET_COLOR,
        color
    }

}