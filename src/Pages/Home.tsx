import React from "react";
import AddTask from "../Components/AddTask";
import { useSelector } from "react-redux";
import type { TaskType } from "../redux/reducer";
import store from "../redux/store";
import { deleteCompleted } from "../redux/reducer";
import { RootState } from "../redux/store";
import Task from "../Components/Task/Task";

const HomePage: React.FC = () => {
  const tasks: TaskType[] = useSelector((store: RootState) => store.tasks);

  let isChecked: boolean = false;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      isChecked = true;
      break;
    }
  }

  const clearChecked: React.MouseEventHandler<HTMLButtonElement> = () => {
    store.dispatch(deleteCompleted());
  };

  return (
    <div className="min-h-svh flex items-center flex-col">
      <div className="">
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
        <div></div>
        {isChecked && (
          <button
            type="button"
            onClick={clearChecked}
            className="mt-4 bg-red-500 px-4 py-1 rounded text-white"
          >
            Clear checked
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
