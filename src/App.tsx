import { useMemo, useState } from "react";
import "./styles/App.css";
import { SubmitTask } from "./components/SubmitTask";
import { TaskElement } from "./components/TaskElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faX,
  faBell,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const name = "My Todo List";
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskInputValue, setTaskInputValue] = useState("");

  const areTasksEmpty = !taskList.length;

  const taskListMemo = useMemo(() => {
    return areTasksEmpty ? (
      <div className="task-element animation">
        <span className="empty-tasks">List is empty. Add some more tasks!</span>
      </div>
    ) : (
      <ul id="task-list">
        {taskList.map((task, index) => (
          <TaskElement
            key={index}
            id={index.toString()}
            doneIcon={
              <FontAwesomeIcon
                icon={faCheck}
                style={{ fontSize: "1vw", color: "#000000" }}
              />
            }
            notDoneIcon={
              <FontAwesomeIcon
                icon={faX}
                style={{ fontSize: "1vw", color: "#000000" }}
              />
            }
            removeIcon={
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: "1vw", color: "#000000" }}
              />
            }
            highlightIcon={
              <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: "1vw", color: "#000000" }}
              />
            }
            notHighlightIcon={
              <FontAwesomeIcon
                icon={faBellSlash}
                style={{ color: "#000000" }}
              />
            }
          >
            {task}
          </TaskElement>
        ))}
      </ul>
    );
  }, [taskList]);

  const handleTaskSubmit = () => {
    if (taskInputValue.trim()) {
      const updatedTasks = [...taskList, taskInputValue];

      setTaskList(updatedTasks);
      setTaskInputValue("");
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaskInputValue(event.target.value);
  };

  const handleClearList = () => {
    setTaskList([]);
  };

  return (
    <div>
      <h1 className="todo-header-div" id="todo-list-header">
        {name}
      </h1>
      <SubmitTask
        submitBarId="submit-task-bar"
        submitBarName="task"
        submitButtonId="submit-task-button"
        clearButtonId="clear-list-button"
        taskList={taskList}
        inputValue={taskInputValue}
        onSubmitClick={handleTaskSubmit}
        onClearListClick={handleClearList}
        onInputChange={handleInputChange}
        buttonIcon={
          <FontAwesomeIcon icon={faCheck} style={{ color: "black" }} />
        }
      >
        Enter a task here
      </SubmitTask>
      <div className={`tasks-div ${areTasksEmpty ? "empty-tasks" : ""}`}>
        <div className="scroll-content">{taskListMemo}</div>
      </div>
    </div>
  );
}

export default App;
