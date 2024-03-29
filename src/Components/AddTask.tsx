import React, { useState } from "react";
import store from "../redux/store";
import { addTask } from "../redux/reducer";
import { v4 as uuid } from "uuid";

const AddTask: React.FC = () => {
  const initialState = {
    taskName: "",
    completed: false,
    dueDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
      .toISOString()
      .slice(0, 10),
    id: "",
  };
  const [task, setTask] = useState(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.taskName.length <= 0) return null;
    const data = task;
    data.id = uuid();
    setTask(data);
    store.dispatch(addTask(data));
    setTask(initialState);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="pt-10">
        <h1 className="text-2xl border-b-2 w-fit mx-auto">
          Welcome to Task Manager
        </h1>
      </div>
      <div className="flex justify-center flex-wrap items-center">
        <form
          className="mt-20 w-full gap-4 flex flex-wrap justify-center px-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter task here"
            name={"taskName"}
            value={task.taskName}
            onChange={handleChange}
            required
            className="rounded h-10 outline-none placeholder:text-slate-700 max-w-[30rem] w-full bg-[#a3b18a] pl-3 caret-lime-300 "
          />
          <div className="flex justify-center items-center gap-3">
            <label htmlFor="date" className="whitespace-nowrap">
              Due Date:
            </label>
            <input
              id="date"
              type="date"
              name="dueDate"
              onChange={handleChange}
              value={task.dueDate}
              className="bg-[#a3b18a] h-10 px-3  rounded flex justify-center items-center "
            />
          </div>
          <button
            type="submit"
            className="bg-button whitespace-nowrap h-10 px-4 rounded hover:bg- active:bg-green-900"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
