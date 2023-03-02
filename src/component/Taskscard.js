import React from "react"
import './kanbanboard.css';
const Taskcard=(props) => {
    return (
        <>
            <div id="taskscard">
                <div>{props.lvalue}</div>
                <div id="tvalue">{props.tvalue}</div>
                <div>{props.date}</div>
            </div>
        </>
    )
}
export default Taskcard;