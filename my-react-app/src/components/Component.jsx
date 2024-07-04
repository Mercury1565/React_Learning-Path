import React, {useState, useEffect, useRef} from 'react'

/*
Using useRef() instead of useState() will avoid rerendering of 
the component when a state value changes. By avoiding component rerendering
we can make our components more efficient.

A very yummy of useRef() is refrencing html elements as demo'ed below
*/

function Component(){
    let [number, setNumber] = useState(0)

    useEffect(() => {
        // using this, we can see that using useState will
        //  will cause our component to rerender as the value
        //   of number is updated
        console.log('component rendered')
    })

    const ref = useRef(0);
    /// useRef returns an object with a single attribute, the
    //  current attribute
    /// The value you pass on to useRef() will hold the current
    //  property of the object

    /// Another important use of useRef() is that it can
    //  also refer to html elements
    const inputRef = useRef(null);

    function handleClick(){
        // setNumber(n => n + 1)
        ref.current ++;

        /// Note theat inputRef.current here gives you an
        //  html element, for this case, an input element
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'green';

        console.log(inputRef.current)
        console.log(ref.current);
    } 

    return(
        <>
        <button onClick={handleClick}>
            Click Me 
        </button>
        <input ref={inputRef}/>
        </>    
    )
}

export default Component