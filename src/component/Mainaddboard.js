import React, { useState } from "react";
import { Plus } from "react-feather";
import Description from "./Description";
import './kanbanboard.css';
import Taskcard from "./Taskscard";
const Mainaddboard = (props) => {
    const [desc, setdesc] = useState(false);
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [label, setlabel] = useState('');
    const [date, setdate] = useState('');
    const [tasks, settasks] = useState('');
    const [taskscard, settaskcard] = useState(false);
    return (
        <>
            {
                desc ?
                    <div id="descque">
                        <div id="addsecondbtn">
                            {props.list.map((value, index) => {
                                return (
                                    <div>
                                        <div id="list" key={index}>
                                            {value}
                                        </div>
                                        <br />
                                        {/* <div id="taskscard">
                                            <div>{label}</div>
                                            <div>{title}</div>
                                            <div>{date}</div>
                                        </div> */}
                                        {/* {props.list.filter((value) => {
                                            if (value.progress == "to do") {
                                                return value;
                                            }
                                        })
                                            .map((value, index) => {
                                                return (<><div> {value.title} <Taskcard title={title} label={label} date={date} /></div></>)
                                            })} */}
                                        <Taskcard title={title} label={label} date={date} />
                                        <br />
                                        <div id="addcarddiv">
                                            <button id="addcard" onClick={() => setdesc(true)} ><Plus id="plusicon" color="black" size="20px" />Add Card</button>
                                        </div>
                                    </div>)
                            })}

                            <button id="firstaddboardbtn" onClick={() => props.Modalopen(true)}>Add Board</button>

                        </div><div>
                            <Description settaskcard={settaskcard} desc={desc} settitle={settitle} title={title} setlabel={setlabel} label={label} setdate={setdate} date={date} setdescription={setdescription} description={description} settasks={settasks} tasks={tasks} />
                        </div>
                    </div>
                    :
                    <div id="addsecondbtn">
                        {props.list.map((value, index) => {
                            return (
                                <div>
                                    <div id="list" key={index}>
                                        {value}
                                    </div>
                                    <br />
                                    <div id="addcarddiv">
                                        <button id="addcard" onClick={() => setdesc(true)} ><Plus id="plusicon" color="black" size="20px" />Add Card</button>
                                    </div>
                                </div>)
                        })}

                        <button id="firstaddboardbtn" onClick={() => props.Modalopen(true)}>Add Board</button>

                    </div>

            }
        </>
    )
}
export default Mainaddboard;