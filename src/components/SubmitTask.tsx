import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  submitBarId: string;
  submitBarName: string;
  submitButtonId: string;
  clearButtonId: string;
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
  onSubmitClick,
  onClearListClick,
  onInputChange,
}: Props) => {
  const addButtonHeldListeners = (buttonId: string): void => {
    const button = document.getElementById(buttonId);

    button?.addEventListener("mousedown", () => {
      button.classList.add("held");
    });

    button?.addEventListener("mouseup", () => {
      button.classList.remove("held");
    });

    button?.addEventListener("mouseleave", () => {
      button.classList.remove("held");
    });
  };

  addButtonHeldListeners(submitButtonId);
  addButtonHeldListeners(clearButtonId);

  return (
    <div>
      <input
        type="text"
        placeholder={children}
        id={submitBarId}
        name={submitBarName}
        onChange={onInputChange}
      />
      <button
        id={submitButtonId}
        onClick={onSubmitClick}
        className="submit-button"
      >
        {buttonIcon}
      </button>
      <button
        id={clearButtonId}
        onClick={onClearListClick}
        className="submit-button"
      >
        Clear List
      </button>
    </div>
  );
};
