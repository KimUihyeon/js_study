import React from 'react';


// Dumb Component


class Control extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onRandomColor}>random color button</button>
            </div>
        )
    }
}


function errorMessage (error){
    return () => console.error(`${error} undefind`)
}

Control.defaultProps = {
    onPlus : errorMessage('onPlus'),
    onMinus : errorMessage('onMinus'),
    onRandomColor:  errorMessage('onRandomColor')
}


export default  Control;