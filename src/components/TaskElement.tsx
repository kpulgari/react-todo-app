import React, { useState } from "react";
import "../styles/TaskElement.css";

interface Props {
  children: string;
  id: string;
}

export const TaskElement = ({ children, id }: Props) => {
  const [taskDone, setTaskDone] = useState(false);
  const [removeTask, setRemoveTask] = useState(false);

  const handleOnCompleteClick = () => {
    setTaskDone(!taskDone);
  };

  const handleOnRemoveClick = () => {
    setRemoveTask(true);
  };

  return removeTask ? null : (
    <li
      className={`task-element${taskDone ? "-done" : ""}`}
      id={`task-element-${id}`}
    >
      {children}
      <button
        id={`task-complete-button-${id}`}
        onClick={() => {
          handleOnCompleteClick();
        }}
      >
        {taskDone ? "Not Done" : "Done"}
      </button>
      <button
        id={`task-remove-button-${id}`}
        onClick={() => {
          handleOnRemoveClick();
        }}
      >
        Remove
      </button>
    </li>
  );
};
