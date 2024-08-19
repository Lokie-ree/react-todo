"use client";

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm"; // New component for task input

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen w-full">
      <main className="p-4 mt-2">
        <TaskForm addTask={addTask} />
        <div className="divider divider-accent"></div>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </main>
    </div>
  );
}
