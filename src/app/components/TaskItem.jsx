"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-primary text-primary-content p-3 rounded-xl shadow-xl">
        <span>{task.text}</span>
        <button
          className="btn btn-accent btn-circle text-lg"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default Task;
