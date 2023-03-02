import React, { useState } from "react";
import './kanbanboard.css';
import Mainaddboard from "./Mainaddboard";
import Modaladdboard from "./ModalAddboard";
const Kanbanboard = (props) => {
    const [Modal, Modalopen] = useState(false)
    const [list, setlist] = useState([]);
    // const [list, setlist] = useState([{id:Math.random()*10},]);
    const [value, setvalue] = useState("");
    return (
        <>
            <div id="main">
                <div id="heading">Kanban Board</div>
                <div id="addboard">

                    {Modal ?
                        <Modaladdboard Modalopen={Modalopen} Modal={Modal} value={value} setlist={setlist} setvalue={setvalue} list={list} />
                        :
                       <Mainaddboard Modalopen={Modalopen} Modal={Modal} list={list} setlist={setlist} setvalue={setvalue} value={value}/>
                    }

                </div>
            </div>
        </>
    )
}
export default Kanbanboard;