"use client";

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm"; // New component for task input
import Header from "./components/Header";

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
    <main className="flex flex-col min-h-screen m-3 overflow-x-clip bg-gradient-to-r from-[#678ab1] to-[#8a8a92]">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
}
