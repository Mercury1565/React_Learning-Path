import React, {useState} from 'react';

function Counter(){
    const [count , setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
};

export default Counter