"use client";

import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center bg-primary text-accent-content p-4 rounded-xl shadow-sm">
      <span>{task.text}</span>
      <div className="flex gap-2">
        <button
          className="btn btn-accent btn-circle"
          onClick={() => document.getElementById("edit_modal").showModal()}
        >
          <FaPencilAlt />
        </button>
        <button
          className="btn btn-accent btn-circle"
          onClick={() => document.getElementById("delete_modal").showModal()}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
