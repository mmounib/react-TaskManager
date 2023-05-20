import React from 'react'
import Task from './Task';


const Tasks = ({ tasks, onDelete, onToggle }) => {

    // setTasks([...tasks, {text: "Going To Gym"}]);
    return (
    <>
      {tasks.map( (task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />) )}
    </>
  )
}

export default Tasks
