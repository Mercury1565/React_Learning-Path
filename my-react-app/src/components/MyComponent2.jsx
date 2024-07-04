import React, {useState, useEffect} from 'react'

function MyComponent2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    /*
    window.addEventListener('resize', handleResize);

    This will do the job but with a severe issue in the background. It 
    will add a new event listner everytime the window is resized
    */


    // we only want to add an event listner when a component is mounted
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // The useEffect also allows writting some cleanup code
        // For instance, here, it's probably a good idea to remove the 
        //  event listner when the component is unmounted
        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        document.title = `w: ${width} h: ${height}`
    }, [width , height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return(
        <>
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
        </>
    )


}

export default MyComponent2