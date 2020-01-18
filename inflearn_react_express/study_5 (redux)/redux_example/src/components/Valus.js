import React from 'react';


// Dumb Component

class Valus extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}

Valus.defaultProps = {
    number : -1
}


export default Valus