import React, { ReactNode, useEffect, useState } from "react";
import { addButtonHeldListeners } from "../utils/buttonHeld";

interface Props {
  children: string;
  submitBarId: string;
  submitBarName: string;
  submitButtonId: string;
  clearButtonId: string;
  inputValue: string;
  taskList: string[];
  buttonIcon: ReactNode;
  onSubmitClick: () => void;
  onClearListClick: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SubmitTask = ({
  children,
  submitBarId,
  submitBarName,
  submitButtonId,
  clearButtonId,
  buttonIcon,
  inputValue,
  taskList,
  onSubmitClick,
  onClearListClick,
  onInputChange,
}: Props) => {
  useEffect(() => {
    const cleanupSubmitButton = addButtonHeldListeners(submitButtonId);
    const cleanupClearButton = addButtonHeldListeners(clearButtonId);

    return () => {
      cleanupSubmitButton();
      cleanupClearButton();
    };
  }, [submitButtonId, clearButtonId]);

  const maxLength = 150;

  const inputDisabled = `${!inputValue.trim() ? "disabled" : ""}`;
  const taskListEmpty = `${!taskList.length ? "disabled" : ""}`;
  const inputFull = `${inputValue.length === maxLength ? "full" : ""}`;

  return (
    <div>
      <input
        className={`input ${inputDisabled} ${inputFull}`}
        type="text"
        placeholder={children}
        id={submitBarId}
        name={submitBarName}
        onChange={onInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmitClick();
          }
        }}
        value={inputValue}
        maxLength={maxLength}
      />
      <button
        id={submitButtonId}
        onClick={onSubmitClick}
        className={`submit-button submit ${inputDisabled}`}
      >
        {buttonIcon}
      </button>
      <button
        id={clearButtonId}
        onClick={onClearListClick}
        className={`submit-button remove ${taskListEmpty}`}
      >
        Clear List
      </button>
    </div>
  );
};
