import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
