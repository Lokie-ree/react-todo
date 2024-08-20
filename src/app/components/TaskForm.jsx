// components/TaskForm.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <span className="flex flex-col space-between bg-secondary rounded-xl mt-4 ml-3 mr-3 mb-4">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex input items-center m-3 w-full text-secondary-content rounded-xl"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" className="btn btn-accent btn-circle text-lg m-3">
          <FaPlus size={16} />
        </button>
      </form>
    </span>
  );
}
