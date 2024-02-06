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
    <div className="flex justify-between  items-center px-2 my-2">
      <Completed completed={completed} id={id} />
      <TaskName taskName={taskName} id={id} />
      <h4>{dueDate}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
