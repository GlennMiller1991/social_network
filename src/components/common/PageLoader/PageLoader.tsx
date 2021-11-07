import React, {useEffect, useState} from "react";

export const PageLoader = React.memo(() => {

        //initial state
        const [seconds, setSeconds] = useState(() => 77726)

        //dinamic styles
        const secondsStyle = {
            transform: `rotate(${seconds * 6}deg`
        }
        const minutesStyle = {
            transform: `rotate(${seconds * 0.1}deg`
        }
        const hoursStyle = {
            transform: `rotate(${seconds * 0.0083333333}deg`
        }
        useEffect(() => {
            setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 4)
        }, [])
        return (
            <div className="clock">
                <div className="outer-clock-face">
                    <div className="marking marking-one"></div>
                    <div className="marking marking-two"></div>
                    <div className="marking marking-three"></div>
                    <div className="marking marking-four"></div>
                    <div className="inner-clock-face">
                        <span className="captionInsideClock">One more<br/>second</span>
                        <div className="hand hour-hand" style={hoursStyle}></div>
                        <div className="hand min-hand" style={minutesStyle}></div>
                        <div className="hand second-hand" style={secondsStyle}></div>
                    </div>
                </div>
            </div>
        )
    }
)