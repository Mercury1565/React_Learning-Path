import React, {useState} from 'react';

function Counter(){
    const [count , setCount] = useState(0);

    const handleIncrement = () => {
        /*
        With the method below, you can't perfrom multiple value
        sets because react batches them up for performance issues
        */
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)


        // A better way using Updater Functions
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        // Doing this, we can take the pending state to calculate
        // the next state.

        // Using this will avoid batchings

    }

    const handleDecrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)

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