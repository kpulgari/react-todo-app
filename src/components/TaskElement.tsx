import React, { ReactNode, useEffect, useState } from "react";
import { addButtonHeldListeners } from "../utils/buttonHeld";

interface Props {
  children: string;
  id: string;
  doneIcon: ReactNode;
  notDoneIcon: ReactNode;
  removeIcon: ReactNode;
  highlightIcon: ReactNode;
  notHighlightIcon: ReactNode;
}

export const TaskElement = ({
  children,
  id,
  doneIcon,
  notDoneIcon,
  removeIcon,
  highlightIcon,
  notHighlightIcon,
}: Props) => {
  const [crossTask, setCrossTask] = useState(false);
  const [removeTask, setRemoveTask] = useState(false);
  const [highlightTask, setHighlightTask] = useState(false);

  const doneButtonId = `task-complete-button-${id}`;
  const removeButtonId = `task-remove-button-${id}`;
  const highlightButtonId = `task-highlight-button-${id}`;

  const handleOnCompleteClick = () => {
    setCrossTask(!crossTask);
  };

  const handleOnRemoveClick = () => {
    setRemoveTask(true);
  };

  const handleOnHighlightClick = () => {
    setHighlightTask(!highlightTask);
    console.log(highlightTask);
  };

  useEffect(() => {
    const cleanupCompleteButton = addButtonHeldListeners(doneButtonId);
    const cleanupRemoveButton = addButtonHeldListeners(removeButtonId);
    const cleanupHighlightButton = addButtonHeldListeners(highlightButtonId);

    return () => {
      cleanupCompleteButton();
      cleanupRemoveButton();
      cleanupHighlightButton();
    };
  }, [doneButtonId, removeButtonId, highlightButtonId]);

  return removeTask ? null : (
    <li className="task-element" id={`task-element-${id}`}>
      <span
        className={`task-text ${crossTask ? "crossed" : ""} ${
          highlightTask ? "highlight" : ""
        }`}
      >
        {children}
      </span>
      <button
        className={`submit-button submit task ${crossTask ? "clicked" : ""}`}
        id={doneButtonId}
        onClick={() => {
          handleOnCompleteClick();
        }}
      >
        {!crossTask ? doneIcon : notDoneIcon}
      </button>
      <button
        className={`submit-button highlight task ${
          highlightTask ? "clicked" : ""
        }`}
        id={highlightButtonId}
        onClick={() => {
          handleOnHighlightClick();
        }}
      >
        {!highlightTask ? highlightIcon : notHighlightIcon}
      </button>
      <button
        className="submit-button remove task"
        id={removeButtonId}
        onClick={() => {
          handleOnRemoveClick();
        }}
      >
        {removeIcon}
      </button>
    </li>
  );
};
