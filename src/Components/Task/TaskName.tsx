import React, { useState } from "react";
import store from "../../redux/store";
import { updateTask } from "../../redux/reducer";
type PropTypes = {
  taskName: string;
  id: string;
};

const TaskName: React.FC<PropTypes> = ({ taskName, id }) => {
  const [name, setName] = useState(taskName);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 0) return;
    setName(value);
    store.dispatch(updateTask({ id, changes: { taskName: value } }));
  };
  return (
    <input
      type="text"
      value={name}
      onChange={onChange}
      className="outline-none focus: border-white bg-inherit pl-3"
    />
  );
};

export default TaskName;
