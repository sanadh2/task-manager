import React from "react";
import { TaskType, deleteTask } from "../../redux/reducer";
import store from "../../redux/store";
import Completed from "./Completed";
import TaskName from "./TaskName";

const Task: React.FC<TaskType> = ({ taskName, id, completed, dueDate }) => {
  const handleDelete = () => {
    store.dispatch(deleteTask(id));
  };

  return (
    <div className="flex border justify-between items-center h-10 px-3 rounded">
      <Completed completed={completed} id={id} />
      <TaskName taskName={taskName} id={id} />
      <h4 className="">{dueDate}</h4>
      <button
        onClick={handleDelete}
        className="text-red-500 bg-button hover:bg-input px-4 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
