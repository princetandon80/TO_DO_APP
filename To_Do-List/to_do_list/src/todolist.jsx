import React, { useState } from "react";

function Todolist() {
    const [task, settask] = useState(["play minecraft","Go for a walk","Eat Food"]);
    const [newtask, setnewtask] = useState("");

    function handleinput(event) {
        setnewtask(event.target.value);
    }

    function addtask(event) {
        if(newtask.trim()!==""){
            settask(t=>[...t,newtask])//updater functions stores the previous state 
            setnewtask("");
        }
        
        
    }

    function deletetask(index) {
        const deletask=task.filter((_,i)=>i!==index)
        settask(deletask);
        
    }

    function movetask(index) {
        if(index>0){
             const updated_task=[...task];
            [updated_task[index],updated_task[index-1]]=[updated_task[index-1],updated_task[index]]
            settask(updated_task)

        }
        
    }

    function movetaskdown(index) {
        if(index< task.length-1){

            const updated_task=[...task];
            [updated_task[index],updated_task[index+1]]=[updated_task[index+1],updated_task[index]]
            settask(updated_task)
        }
        
    }

    return (
        <>
        <h2> To Do list App</h2>
            <input 
                type="text"
                placeholder="Enter your task"
                value={newtask} 
                onChange={handleinput}
                />
                <button className="btn" onClick={addtask}>Add</button>
                 <ol>
                    {task.map((task,index)=>
                    <li key={index}>
                        <span className="spn">{task}</span>
                            <button className="del" onClick={()=>deletetask(index)}>Delete</button>
                                                        <button className="move-up" onClick={()=>movetask(index)}>up</button>
                            <button className="del" onClick={()=>movetaskdown(index)}>down</button>


                      
                    </li>
                        
                    )}
    </ol>
            </>

    );
   
}

export default Todolist;