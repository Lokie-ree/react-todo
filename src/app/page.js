'use client'

import React, { useState } from 'react'
import Header from "./components/Header";
import TaskList from "./components/TaskList";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if(taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main className="p-4">
        <div className="flex mb-4">
          <input 
            type="text"
            className="input input-bordered bg-accent-content text-accent flex-grow"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add a new task"
          />
          <button className="btn bg-accent-content text-accent ml-2" onClick={addTask}>
            Add Task
          </button>
        </div>
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </main>
    
    </div>
  );
}
