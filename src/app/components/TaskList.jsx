import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, onDelete }) => {
  return (
      <div className="bg-accent-content text-accent rounded-box">
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
      </div>
  )
}

export default TaskList