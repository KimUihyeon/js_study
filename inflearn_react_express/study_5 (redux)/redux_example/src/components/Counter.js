import React from 'react'
import Valus from './Valus'
import Control from './Control'
import { connect, bindActionCreators } from 'react-redux'
import * as actions from '../actions/ActionIndex'


class Counter  extends  React.Component{
    constructor(props){
        super(props);

        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor (){
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ]

        this.props.handleSetColor(color);
    }

    render(){
        return (
            <div>
                <Valus number={this.props.number}></Valus>
                <Control 
                    onMinus={this.props.handleDecrement}
                    onPlus={this.props.handleIncrement}/>
            </div>
        )
    }
}


Counter.dafaultProps = {}

const mapStateToProps = (state) =>{ // 여기서 state는 components state랑 다름.!
    return {
        number : state.counter.number,
        color : state.ui.color
    }
}

const mapDispetchToProps = (dispetch) =>{
    // return bindActionCreators(actions, dispetch); // 자동으로 아래껄 세팅해준다.

    return {
        handleIncrement : () => {dispetch(actions.increament()) },
        handleDecrement : () => {dispetch(actions.decrement()) },
        handleSetColor : (color) => {dispetch(actions.setColor(color))}
    }
}

/// connect() 는 리덕스에 컨포넌트를 연결해주는 함수를 리턴 해주는 함수다 .
// connect() ( 컨포넌트 명)
export default connect(mapStateToProps, mapDispetchToProps)(Counter);