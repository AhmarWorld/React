import "./TaskCard.css";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import TaskInput from "../TaskInput/TaskInput";
import TaskButton from "../TaskButton/TaskButton";
import { useState } from "react";

export default function TaskCard({ title, id, setTask, tasks }) {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const deleteTodo = (id) => {
    const data = [...tasks];
    const result = data.filter((el) => el.id !== id);
    setTask(result);
  };

  const editTodo = (id, newText) => {
    const data = [...tasks];
    data.forEach((el) => {
      if (el.id === id) {
        el.value = newText;
      }
    });
    setTask(data);
  };

  return (
    <div>
      <div className="taskCard" id={isEdit && "show"}>
        <p>{title}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60px",
          }}
        >
          <span
            onClick={() => {
              setEdit(true);
            }}
          >
            <BiEdit />
          </span>
          <span
            onClick={() => {
              deleteTodo(id);
            }}
          >
            <FaTrash />
          </span>
        </div>
      </div>
      {isEdit && (
        <div className="editTask">
          <TaskInput inputValue={inputValue} setInputValue={setInputValue} />
          <TaskButton
            buttonState={inputValue ? false : true}
            func={() => {
              setEdit(false);
              editTodo(id, inputValue);
            }}
            value={"Edit"}
          />
        </div>
      )}
    </div>
  );
}
