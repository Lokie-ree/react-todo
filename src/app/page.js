"use client";

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskEdit, setTaskEdit] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-h-screen w-full">
      <main className="p-4">
        <form className="flex mb-4" onSubmit={addTask}>
          <input
            type="text"
            className="input input-bordered bg-secondary flex-grow rounded-xl"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="btn bg-secondary text-secondary-content ml-2 rounded-xl"
            onClick={addTask}
          >
            Add Task
          </button>
        </form>
        <TaskList tasks={tasks} onDelete={deleteTask} />
        <EditModal />
        <DeleteModal />
      </main>
    </div>
  );
}
