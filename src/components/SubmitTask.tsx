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

  return (
    <div>
      <input
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
        maxLength={150}
      />
      <button
        id={submitButtonId}
        onClick={onSubmitClick}
        className={`submit-button submit ${!inputValue ? "disabled" : ""}`}
      >
        {buttonIcon}
      </button>
      <button
        id={clearButtonId}
        onClick={onClearListClick}
        className={`submit-button remove ${!taskList.length ? "disabled" : ""}`}
      >
        Clear List
      </button>
    </div>
  );
};
