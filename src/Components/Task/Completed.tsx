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
    <div className="border w-4 h-4 flex justify-center items-center">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onChange}
        className="appearance-none bg-transparent transition-colors duration-500  aspect-square outline-none h-2 w-2 checked:bg-black"
      />
    </div>
  );
};

export default Completed;
