import React, { useState, useEffect } from 'react';

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const setTask = function () {
        // /
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }
    function firstCb() {
        console.log("first useEffect");
    }
    // 3rd version -> it's cb fn is called after render and after the element changes its value 
    // inside  the dependent array
    useEffect(thirdCb, [taskList]);
    console.log("render");
    return (
        <>
            <div>
                {/* input */}
                <input type = "text" placeholder = "Input Task" value = {value}
                    onChange = {(e) => { setValue(e.target.value) }}></input>
                <button onClick = {setTask}>Add Task </button>
            </div>

            {/* list  */}
            {taskList.map((taskObj) => {
                return (
                    <Task key = {taskObj.id} id = {taskObj.id} task = {taskObj.task}
                        removeTask = {removeTask}></Task>)
            })}
        </>
    )
}  

export default UseEffectExamples;