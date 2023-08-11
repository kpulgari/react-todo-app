import React, { ReactNode } from "react";

interface Props {
  children: string;
  submitBarId: string;
  submitBarName: string;
  submitButtonId: string;
  clearButtonId: string;
  onSubmitClick: () => void;
  onClearListClick: () => void;
}

export const SubmitTask = ({
  children,
  submitBarId,
  submitBarName,
  submitButtonId,
  clearButtonId,
  onSubmitClick,
  onClearListClick,
}: Props) => {
  return (
    <div>
      <input
        type="string"
        placeholder={children}
        id={submitBarId}
        name={submitBarName}
      ></input>
      <button id={submitButtonId} onClick={onSubmitClick}>
        Submit
      </button>
      <button id={clearButtonId} onClick={onClearListClick}>
        Clear List
      </button>
    </div>
  );
};
