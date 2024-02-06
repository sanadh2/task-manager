import React from "react";
import AddTask from "../Components/AddTask";
import { useSelector } from "react-redux";
import type { TaskType } from "../redux/reducer";

import { RootState } from "../redux/store";
import Task from "../Components/Task/Task";

const HomePage: React.FC = () => {
  const tasks: TaskType[] = useSelector((store: RootState) => store.tasks);

  return (
    <div className="min-h-svh flex items-center flex-col">
      <div>
        <AddTask />
        <div className="mt-10 w-full">
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskName={task.taskName}
              id={task.id}
              dueDate={task.dueDate}
              completed={task.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
