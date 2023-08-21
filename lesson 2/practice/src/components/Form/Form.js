import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskButton from "../TaskButton/TaskButton";
import "./Form.css";

export default function From({ setTask }) {
  const [inputValue, setInputValue] = useState("");

  const addNewTask = () => {
    setTask((prev) => [
      ...prev,
      { id: new Date().getTime(), value: inputValue },
    ]);
  };
  return (
    <div className="addForm">
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} />
      <TaskButton
        buttonState={inputValue ? false : true}
        value="AddTask"
        onClick={() => {
          addNewTask();
          setInputValue("");
        }}
      />
    </div>
  );
}
