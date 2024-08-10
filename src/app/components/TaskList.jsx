import React from "react";
import Task from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="flex flex-col gap-4 text-accent font-bold rounded-xl">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
