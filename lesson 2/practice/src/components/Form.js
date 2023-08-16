import { useState } from "react";
import TaskInput from "./Input/TaskInput";
import TaskButton from "./Button/TaskButton";

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
        func={() => {
          addNewTask();
          setInputValue("");
        }}
      />
    </div>
  );
}
