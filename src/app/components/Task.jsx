'use client'

import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-2 border bg-base-400 rounded-lg shadow-md">
      <span>{task.text}</span>
      <button
        className="btn btn-error btn-circle"
        onClick={() => onDelete(task.id)}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default Task