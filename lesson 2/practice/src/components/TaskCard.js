import "../App.css";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import TaskInput from "./Input/TaskInput";
import TaskButton from "./Button/TaskButton";
import { useState } from "react";

export default function TaskCard({ title, id, deleteFunc, editFunc }) {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

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
              deleteFunc(id);
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
              editFunc(id, inputValue);
            }}
            value={"Edit"}
          />
        </div>
      )}
    </div>
  );
}
