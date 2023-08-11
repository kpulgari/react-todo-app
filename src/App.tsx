import { useMemo, useState } from "react";
import "./App.css";
import { SubmitTask } from "./SubmitTask";

function App() {
  const name = "Jane Doe";
  const [task, setTask] = useState<string[]>([]);

  /* The `useMemo` hook is used to memoize the result of a computation. In this case, it is used to
memoize the rendering of the task list. */
  const taskList = useMemo(() => {
    return (
      <ul id="task-list">
        {task.map((task, index) => (
          <li className="task-element" key={index}>
            {task}
          </li>
        ))}
      </ul>
    );
  }, [task]);

  /**
   * The function `handleTaskSubmit` takes the value from an input element, adds it to an array of tasks,
   * and clears the input element.
   */
  const handleTaskSubmit = () => {
    const inputElement = document.querySelector(
      "#submit-task-bar"
    ) as HTMLInputElement;
    const inputValue = inputElement?.value;

    if (inputValue) {
      const updatedTasks = [...task, inputValue];
      setTask(updatedTasks);
      inputElement.value = "";
    }
  };

  /**
   * The function `handleClearList` removes all child elements from the "task-list" element.
   */
  const handleClearList = () => {
    var taskList = document.getElementById("task-list");

    while (taskList?.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  };

  return (
    <div>
      <h1 id="todo-list-header">{name}'s Todo List</h1>
      <SubmitTask
        submitBarId="submit-task-bar"
        submitBarName="task"
        submitButtonId="submit-task-button"
        clearButtonId="clear-tasks-button"
        onSubmitClick={handleTaskSubmit}
        onClearListClick={handleClearList}
      >
        Enter a task here
      </SubmitTask>
      <div>{taskList}</div>
    </div>
  );
}

export default App;
