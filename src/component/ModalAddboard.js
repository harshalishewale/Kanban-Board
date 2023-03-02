import React, { useState } from "react";
import { List, X } from "react-feather";
const Modaladdboard = (props) => {
    const handleboard = () => {
        props.setlist((list) => {
        //    id: Date.now() + Math.random() * 2;
            const show = [...list, props.value]
            return show;
        })
        console.log('list', props.list, 'value', props.value)
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Enter Board Name" id="inputboard" onChange={(event) => { props.setvalue(event.target.value) }} />
                <br /><br />
                <div id="addsecondbtn">
                    <button id="secondaddboardbtn" onClick={() => { props.Modalopen(false); handleboard(); }}>Add Board</button>
                    <X id="xicon" color="black" size="30px" onClick={() => { props.Modalopen(false) }} />
                </div>
            </div>
        </>
    )
}
export default Modaladdboard;