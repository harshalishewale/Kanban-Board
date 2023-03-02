import React from "react"
const Taskcard=(props) => {
    return (
        <>
            <div id="taskscard">
                <div>{props.label}</div>
                <div>{props.title}</div>
                <div>{props.date}</div>
            </div>
        </>
    )
}
export default Taskcard;