import React, { useState } from "react";

interface Props {
  children: string;
  id: string;
}

export const TaskElement = ({ children, id }: Props) => {
  const [taskDone, setTaskDone] = useState(true);

  const handleOnCompleteClick = (id: string) => {
    setTaskDone(!taskDone);

    let task = document.getElementById(`task-element-${id}`) as HTMLElement;
    let doneButton = document.getElementById(`task-complete-button-${id}`);

    if (taskDone) {
      task.style.textDecoration = "line-through";
      if (doneButton) {
        doneButton.innerText = "Not Done";
      }
    } else {
      task.style.textDecoration = "";
      if (doneButton) {
        doneButton.innerText = "Done";
      }
    }
  };

  const handleOnRemoveClick = (id: string) => {
    let task = document.getElementById(`task-element-${id}`);
    task?.remove();
  };

  return (
    <li className="task-element" id={`task-element-${id}`}>
      {children}
      <button
        id={`task-complete-button-${id}`}
        onClick={() => {
          handleOnCompleteClick(id);
        }}
      >
        Done
      </button>
      <button
        id={`task-remove-button-${id}`}
        onClick={() => {
          handleOnRemoveClick(id);
        }}
      >
        Remove
      </button>
    </li>
  );
};
