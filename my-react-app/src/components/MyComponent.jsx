import React, {useState, useEffect} from 'react'

/*
useEffect(function, [dependencies])

1. useEffect(() => {})          Runs after every re-render
2. useEffect(() => {}, [])      Runs only on component mount
3. useEffect(() => {}, [value]) Runs on mount and when value changes
*/

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })

    // to instill the changes when only the color changes
    /*
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    } , [color])
    */

    // to instill the changes when one of the color or count changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [color, count])

    function handleIncrement(){
        setCount(c => c + 1)
    }

    function handleDecrement(){
        setCount(c => c - 1)
    }

    function handleColorChange(){
        setColor(c => c === 'green' ? 'red': 'green');
    }


    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={handleDecrement}>
                Increment
            </button> <br/>

            <button onClick={handleColorChange}>
                Change Color
            </button>
        </div>
    );
}

export default MyComponent