import { createSlice } from "@reduxjs/toolkit";

export type TaskType = {
  taskName: string;
  completed: boolean;
  dueDate: string;
  id: string;
};

const initialState: { tasks: TaskType[] } = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: { payload: TaskType }) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action: { payload: string }) {
      state.tasks = state.tasks.filter((task) => {
        if (task.id != action.payload) return task;
      });
    },
    updateTask(
      state,
      action: { payload: { id: string; changes: Partial<TaskType> } }
    ) {
      const { id, changes } = action.payload;
      const taskToUpdate = state.tasks.find((task) => {
        if (task.id == id) return task;
      });
      if (taskToUpdate) Object.assign(taskToUpdate, changes);
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
