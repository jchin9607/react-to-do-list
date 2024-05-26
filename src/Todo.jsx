import React, { useState } from 'react';

function Todo() {
    const [Tasks, setTodos] = useState(["Task1", "Task2", "Task3", "Task4", "Task5"]);

    const [newTask, setNewTask] = useState("");

    function addNewTask(event) {
        setNewTask(event.target.value);
    }

    function addToList() {
        if (newTask !== "") {
            setTodos(T => [...T, newTask]);
            setNewTask("");
            document.getElementById("new-task").value = "";
        }
    }

    function deleteTast(index) {
        setTodos(T => T.filter((_, i) => i !== index));
    }

    return(
        <div class="App">
            <h1>Todo List</h1>
            <main>
                <div className="input-box">
                    <input type="text" placeholder='Add new task' onChange={addNewTask} id="new-task" />
                    <button onClick={addToList}>Add</button>

                </div>
                <div className="list">
                    
                    <p>{Tasks.map((element, index) => 
                        <li key={index}><span>{element}</span><button onClick={() => deleteTast(index)}>Delete</button></li>
                    )
                    }</p>
                </div>
            </main>
        </div>
    )

}

export default Todo