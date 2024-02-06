import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
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
    setName(value);
  };
  const onSubmit = () => {
    const trimmedName = name.trim();
    if (trimmedName == taskName || trimmedName.length <= 0) return;
    store.dispatch(updateTask({ id, changes: { taskName: trimmedName } }));
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-lg text-black hover:bg-button/30 bg-transparent transition-colors inline-flex items-center justify-center rounded px-4">
          {name}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="text-black   ">Edit task name</Dialog.Title>
          <Dialog.Description className="DialogDescription "></Dialog.Description>
          <fieldset className="Fieldset ">
            <label className="text-black" htmlFor="name">
              Name
            </label>
            <input
              className="text-black bg-[#a3b18a] outline-none rounded pl-3 h-10 w-full"
              id="name"
              value={name}
              spellCheck={false}
              onChange={onChange}
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                onClick={onSubmit}
                className="text-black hover:text-green-500 transition-colors bg-transparent bg-button px-4 py-1 rounded"
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="IconButton  absolute top-[10px] right-[10px]  text-black hover:text-black transition-colors text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TaskName;
