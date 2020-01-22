import React from 'react' 
import Value from './Value'
import Countor from './Countor'
import { connect  } from 'react-redux';
import * as action from '../actions/index'

let Cotrol = ({handleIncrement ,handleDecrement , number }) => {

    return (
        <div>
            <Countor increment={handleIncrement} decrement={handleDecrement}></Countor>
            <Value number={number}/>
        </div>
    )
}

let mapStateToProp = (state) => {
    return {
        number : state.Counter.number,
        color : state.Ui.color
    }
}

let mapDispatchToProp = (dispatch) =>{
    return {
        handleIncrement : ()=> { dispatch(action.increment())},
        handleDecrement : ()=> { dispatch(action.decrement())},
        handleChangeColor : (color)=> { dispatch(action.setColor(color))}
    }
}




export default connect(mapStateToProp,mapDispatchToProp)(Cotrol);