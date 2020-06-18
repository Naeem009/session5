import React, { useContext } from 'react';
import counterContext from './CounterContext.js';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>
                This is first Child
            </h1>
            <h2>
                The Counter Value is {counterValue[0]}
            </h2>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>
                Increase Value
            </button>
        </div>
    );
}

export default Child;