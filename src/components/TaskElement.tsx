import React, { ReactNode, useEffect, useState } from "react";
import { useButtonHeldListeners } from "../hooks/useButtonHeldListeners";

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

  const crossClicked = crossTask ? "crossed" : "";
  const highlightClicked = highlightTask ? "highlight" : "";

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
    const cleanupCompleteButton = useButtonHeldListeners(doneButtonId);
    const cleanupRemoveButton = useButtonHeldListeners(removeButtonId);
    const cleanupHighlightButton = useButtonHeldListeners(highlightButtonId);

    return () => {
      cleanupCompleteButton();
      cleanupRemoveButton();
      cleanupHighlightButton();
    };
  }, [doneButtonId, removeButtonId, highlightButtonId]);

  return removeTask ? null : (
    <li className={`task-element ${crossClicked}`} id={`task-element-${id}`}>
      <span className={`task-text ${crossClicked} ${highlightClicked}`}>
        {children}
      </span>
      <button
        className={`submit-button submit task ${crossClicked}`}
        id={doneButtonId}
        onClick={() => {
          handleOnCompleteClick();
        }}
      >
        {!crossTask ? doneIcon : notDoneIcon}
      </button>
      <button
        className={`submit-button highlight task ${highlightClicked}`}
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
