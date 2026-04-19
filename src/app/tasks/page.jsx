import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>
      <AddTask />
      <div className="grid grid-cols-3 gap-5 pt-10">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
