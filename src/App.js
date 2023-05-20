import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/addTask';
import './index.css';

const App = () => {

  const [showTasks, setShowTasks] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "5th Fab 2020",
        reminder: true,
    },
    {
        id: 2,
        text: "Play Football",
        day: "12th Fab 2020",
        reminder: true,
    },
    {
        id: 3,
        text: "Study Geography",
        day: "23th Fab 2020",
        reminder: false,
    }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 15) + 1;

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  const DeleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e));
  };

  const toggleReminder = (e) => {
    setTasks(
      tasks.map( (task) => task.id === e ? {...task, reminder: !task.reminder} : task )
      );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowTasks(!showTasks)} showAdd={showTasks}/>
      {
        showTasks && <AddTask onAdd={addTask} />
      }
      <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
