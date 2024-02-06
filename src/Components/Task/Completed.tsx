import React, { useState } from "react";
import store from "../../redux/store";
import { updateTask } from "../../redux/reducer";
type PropTypes = {
  completed: boolean;
  id: string;
};

const Completed: React.FC<PropTypes> = ({ id, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const onChange = () => {
    setIsCompleted((prev) => !prev);
    store.dispatch(updateTask({ id, changes: { completed: !completed } }));
  };

  return (
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={onChange}
      className="bg-transparent appearance-none w-4 h-4 aspect-square border border-white checked:bg-white"
    />
  );
};

export default Completed;
