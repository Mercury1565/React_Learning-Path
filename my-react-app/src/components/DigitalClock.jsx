import React, {useState, useEffect} from 'react'

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    //useEffect(funciton, array of dependencies)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return() => {
            // CleanUp Code
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();

        const meridian = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;
        
        return `${hour >= 10 ? hour: '0'+hour} : 
                ${minute >= 10 ? minute: '0'+minute} : 
                ${second >= 10 ? second: '0'+second}
                ${meridian}`
    }

    return(
        <div>
            <span>{formatTime()}</span>
        </div>
    )
}

export default DigitalClock