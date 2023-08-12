import { useMemo, useState } from "react";
import "./styles/App.css";
import { SubmitTask } from "./components/SubmitTask";
import { TaskElement } from "./components/TaskElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  const name = "Jane Doe";
  const [taskList, setTaskList] = useState<string[]>([]);
  const [inputEmpty, setInputEmpty] = useState(true);
  const [listEmpty, setListEmpty] = useState(true);

  const taskListMemo = useMemo(() => {
    return (
      <ul id="task-list">
        {taskList.map((task, index) => (
          <TaskElement key={index} id={index.toString()}>
            {task}
          </TaskElement>
        ))}
      </ul>
    );
  }, [taskList]);

  const handleTaskSubmit = () => {
    const inputElement = document.querySelector(
      "#submit-task-bar"
    ) as HTMLInputElement;
    const inputValue = inputElement?.value;

    if (inputValue) {
      const updatedTasks = [...taskList, inputValue];
      setTaskList(updatedTasks);
      inputElement.value = "";
      setInputEmpty(true);
      setListEmpty(false);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputEmpty(!event.target.value);
  };

  const handleClearList = () => {
    setTaskList([]);
    setListEmpty(true);
  };

  return (
    <div>
      <h1 id="todo-list-header">{name}'s Todo List</h1>
      <SubmitTask
        submitBarId="submit-task-bar"
        submitBarName="task"
        submitButtonId={`submit-task-button${inputEmpty ? "-disabled" : ""}`}
        clearButtonId={`clear-list-button${listEmpty ? "-disabled" : ""}`}
        onSubmitClick={handleTaskSubmit}
        onClearListClick={handleClearList}
        onInputChange={handleInputChange}
        buttonIcon={
          <FontAwesomeIcon icon={faCheck} style={{ color: "black" }} />
        }
      >
        Enter a task here
      </SubmitTask>
      <div>{taskListMemo}</div>
    </div>
  );
}

export default App;
