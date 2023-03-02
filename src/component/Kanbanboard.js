import React, { useState } from "react";
import './kanbanboard.css';
import Mainaddboard from "./Mainaddboard";
import Modaladdboard from "./ModalAddboard";
const Kanbanboard = (props) => {
    const [Modal, Modalopen] = useState(false);
    //const [list, setlist] = useState([]);
    const [list, setlist] = useState([]);
    const [value, setvalue] = useState("");
    const key=[{
        id: Date.now() + Math.random() * 2,
        card:[]
    }]
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