import React from 'react';

let Countor = (props) =>{
    let {increment, decrement} = props;
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Countor;