import React, {useState, useEffect, useRef} from 'react'

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
            // this function will run in every 10 mSecs
        }
        
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start(){
        setIsRunning(true);
        // Date.now() gives you the time of now in mSecs 
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        // elapsed time is in milliseconds
        let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let mSeconds = Math.floor((elapsedTime % 1000) / 10);

        return `${minute >= 10 ? minute : '0' + minute}:
                ${seconds >= 10 ? seconds: '0' + seconds}:
                ${mSeconds >= 10 ? mSeconds: '0' + mSeconds}`
    }
    return(
        <>
            {formatTime()}

        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}

export default StopWatch