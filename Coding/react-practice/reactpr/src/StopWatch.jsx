import React from 'react';

import "./StopWatch.css";

// let interval;

const StopWatch = () => {
    const [stopwatchTimer, setStopwatchTimer] = React.useState(0);
    // let interval;
    // console.log("interval value during each render", interval)
    
    // Ref is used to store current instance or value 
    // which won't get updated during render lifecycle
    const intervalRef = React.useRef();
    console.log("interval value during each render", intervalRef)

    const timerChange = () => {
        // this way won't work while using with setInterval
        // setStopwatchTimer(stopwatchTimer + 1);
        
        // instead use it as below
        // this will check for last updated value and update state based on it
        setStopwatchTimer((prevValue) => prevValue + 1);
    }
    
    const handleStartClick = () => {
        // interval = setInterval(timerChange, 1000);
        // console.log("interval on set", interval)
        
        intervalRef.current = setInterval(timerChange, 1000);
        console.log("interval on set", intervalRef)
    }
    
    const handleStopClick = () => {
        // console.log("stop called", interval)
        // clearInterval(interval);

        console.log("stop called", intervalRef)
        clearInterval(intervalRef.current);
    }

    const renderSeconds = () => {
        return stopwatchTimer;
    }

    const renderMinutes = () => {
        const minutes = stopwatchTimer / 60
        return Math.floor(minutes)
    }

    const renderHours = () => {
        const minutes = stopwatchTimer / 60
        const hours = minutes / 60
        return Math.floor(hours)
    }

    return (
        <div className='card stopwatch-container'>
            <div className='stopwatch-header'>
                <div className='stopwatch-time'>{renderHours()}:{renderMinutes()}:{renderSeconds()}</div>
                <br/>
                <div className='stopwatch-time'>HH:MM:SS</div>
            </div>

            <div className='stopwatch-handles'>
                <button
                    className='btn'
                    onClick={handleStartClick}                    
                >
                    Start
                </button>
                <button
                    className='btn'
                    onClick={handleStopClick}
                >
                    Stop
                </button>
            </div>
        </div>
    )
}

export default StopWatch;