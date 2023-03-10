import React, { useState } from "react";
import { Calendar, CheckSquare, List, Tag, Type, X } from "react-feather";
import './kanbanboard.css';
const Description = (props) => {

    const handletitle = () => {
        props.settvalue(props.title)
    }
    const handledesc = (event) => {
        props.setvdescription(props.description);
    }

    const handlelabel = () => {
        props.setlvalue(props.label)
    }

    const handledate = (event) => {
        props.setdate(event.target.value);
    }

    const handletasks = (event) => {
        props.settasks(event.target.value);
    }

console.log('props.tvalue',props.tvalue,'props.label',props.lvalue,'props.vdescription',props.vdescription)
    console.log('title', props.title, 'description', props.description, 'date', props.date, 'label', props.label, 'tasks', props.tasks);
    return (
        <div id="descmain">
            {/* <div>
                <label htmlFor="progress">Progress : </label>
                <select id="progress" name="progress">
                    <option value="inprogress">In Progress</option>
                    <option value="to do">To Do</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <br/> */}

            <div>
                <div id="Titletype">
                    <Type color="black" size="25px" />
                    <div id="Title">Title</div>
                </div>
                <input type="text" placeholder="Enter Title" id="inputboard" onChange={ (event)=>props.settitle(event.target.value)} />
                <br />
                <div id="addsecondbtn">
                    <button id="secondaddboardbtn" onClick={handletitle}>Add Title</button>
                    <X id="xicon" color="black" size="30px" />
                </div>
                <br />


                <div>
                    <div id="Titletype">
                        <List color="black" size="25px" />
                        <div id="Title">Description</div>
                    </div>
                    <input type="text" placeholder="Description" id="inputboard" onChange={(event)=>props.setdescription(event.target.value)} />
                    <br />
                    <div id="addsecondbtn">
                        <button id="secondaddboardbtn" onClick={handledesc}>Add Description</button>
                        <X id="xicon" color="black" size="30px" />
                    </div>
                </div>
            </div>
            <br />

            <div>
                <div id="Titletype">
                    <Calendar color="black" size="25px" />
                    <div id="Title">Date</div>
                </div>
                <input type="date" placeholder="Description" id="calendar" onChange={handledate} />
            </div>
            <br />

            <div>
                <div id="Titletype">
                    <Tag color="black" size="25px" />
                    <div id="Title">Label</div>
                </div>
                <br />

                <div id="colors">
                    <div id="brown" onClick={()=>{props.selectedcolor()}}></div>
                    <div id="green"></div>
                    <div id="blue"></div>
                    <div id="darkgreen"></div>
                    <div id="purple"></div>
                    <div id="pink"></div>
                    <div id="black"></div>
                </div>

                <input type="text" placeholder="Enter Label Text" id="inputboard" onChange={ (event)=>props.setlabel(event.target.value)&& props.selectedcolor()}  />
                <br />
                <div id="addsecondbtn">
                    <button id="secondaddboardbtn" onClick={handlelabel}>Add</button>
                    <X id="xicon" color="black" size="30px" />
                </div>
            </div>
            <br />

            <div id="Titletype">
                <CheckSquare color="black" size="25px" />
                <div id="Title">Tasks</div>
            </div>
            <br />
            <div>
                <div className="skill"></div>
            </div>
            <input type="text" placeholder="Enter Tasks" id="inputboard" onChange={handletasks} />
            <br />
            <div id="addsecondbtn">
                <button id="secondaddboardbtn" >Add</button>
                <X id="xicon" color="black" size="30px" />
            </div>
        </div>
    )
}
export default Description;
