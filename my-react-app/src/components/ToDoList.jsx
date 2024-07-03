import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["brush teeth", "go to work"]);
    const [newTask, setNewTask] = useState([]);

    function handleInput(event){
        setNewTask(event.target.value);
    }

    function handleAddNewTask(){
        if(newTask !== '') {
            setTasks(t => [...t, newTask])
            setNewTask('')
        }
    }

    function handleDeleteTask(index){
        setTasks(t => t.filter((task, i) => index !== i))
    }

    function handleMoveTaskUp(i){
        if(i > 0){
            const newOrder = [...tasks];
            [newOrder[i - 1], newOrder[i]] = [newOrder[i], newOrder[i - 1]]
            setTasks(newOrder)   
        }
    }

    function handleMoveTaskDown(i){
        if(i < tasks.length - 1){
            const newOrder = [...tasks];
            [newOrder[i + 1], newOrder[i]] = [newOrder[i], newOrder[i + 1]]
            setTasks(newOrder)
        }
    }
    return(
        <div>
            <input
                type='text'
                value={newTask}
                placeholder='Add New Task'
                onChange={handleInput}
            />
            <button onClick={handleAddNewTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}> 
                        {task} 
                        <button onClick={() => handleDeleteTask(index)}>
                            Delete
                        </button>

                        <button onClick={() => handleMoveTaskUp(index)}>
                            Move Up
                        </button>

                        <button onClick={() => handleMoveTaskDown(index)}>
                            Move Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList