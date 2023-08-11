/**
 * Props for the `SubmitTask` component.
 */
interface Props {
  children: string;
  submitBarId: string;
  submitBarName: string;
  submitButtonId: string;
  clearButtonId: string;
  onSubmitClick: () => void;
  onClearListClick: () => void;
}

/**
 * The `SubmitTask` component is a form that allows users to input a task, submit it, and clear the task list.
 *
 * @param {Props} props - The props for the `SubmitTask` component.
 *   - `children` (string): The placeholder text for the input field.
 *   - `submitBarId` (string): The HTML ID attribute for the input element.
 *   - `submitBarName` (string): The HTML name attribute for the input element.
 *   - `submitButtonId` (string): The HTML ID attribute for the submit button.
 *   - `clearButtonId` (string): The HTML ID attribute for the clear button.
 *   - `onSubmitClick` (function): Callback function to handle task submission.
 *   - `onClearListClick` (function): Callback function to clear the task list.
 *
 * @returns The `SubmitTask` component.
 */
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
      />
      <button id={submitButtonId} onClick={onSubmitClick}>
        Submit
      </button>
      <button id={clearButtonId} onClick={onClearListClick}>
        Clear List
      </button>
    </div>
  );
};
