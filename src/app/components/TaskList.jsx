import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div className="flex flex-col ml-3 mr-3 gap-4 rounded-xl">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
