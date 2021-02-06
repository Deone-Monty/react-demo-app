
import React from "react";
import { Link } from "react-router-dom";

function JeopardyDisplay(props) {
    return (
        <div>
            <div><p>Question:</p><span> {props.question}</span></div>
            <div><p>Category:</p><span> {props.category}</span></div>
            <div><p>Point Value:</p><span> {props.value}</span></div>
            <div><p>User Score:</p><span> {props.score}</span></div>
            <input
                type="text"
                name="userAnswer"
                value={props.userAnswer}
                onChange={props.handleChange}
                />
                <button onClick={props.handleAnswer}>Click Me!</button>
        </div>
            
            
    )
}
export default JeopardyDisplay;
