// components/TaskForm.jsx
import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form className="flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex input items-center w-full bg-secondary rounded-xl"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="btn bg-secondary text-secondary-content ml-2 rounded-xl"
      >
        Add Task
      </button>
    </form>
  );
}
