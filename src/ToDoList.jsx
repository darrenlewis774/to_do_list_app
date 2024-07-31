import React, {useState} from 'react';

function ToDoList(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    // Ensure 'newTask' is not an empty string before
    // adding to array.
    if (newTask.trim() !== ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }

  }

  function deleteTask(index){

    // Filter all elements of 'tasks' array into 'updatedTasks'
    // array, except the element selected for deletion.
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Update 'tasks' array with 'updatedTasks'.
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){

    // Check that li element is not already at index 0 of
    // the 'tasks' array, meaning at the top.
    if(index > 0){
      // Assign spread of current 'tasks' array to
      // 'updatedTasks'
      const updatedTasks = [...tasks];
      // Use array destructuring to swap two elements within
      // 'updatedTasks' array.
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      // Update 'tasks' array with 'updatedTasks'.
      setTasks(updatedTasks);
    }

  }

  function moveTaskDown(index){

    // Check that li element is not already at last index of
    // the 'tasks' array, meaning at the bottom.
    if(index < tasks.length - 1){
      // Assign spread of current 'tasks' array to
      // 'updatedTasks'
      const updatedTasks = [...tasks];
      // Use array destructuring to swap two elements within
      // 'updatedTasks' array.
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      // Update 'tasks' array with 'updatedTasks'.
      setTasks(updatedTasks);
    }

  }

  return( <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
              <input
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={handleInputChange}/>
              <button
                className="add-button"
                onClick={addTask}>
                Add
              </button>
            </div>

            <ol>
              {tasks.map((task, index) =>
              <li key={index}>
                <span className="text">{task}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskUp(index)}>
                  ☝
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </li>)}
            </ol>


          </div>);
}

export default ToDoList