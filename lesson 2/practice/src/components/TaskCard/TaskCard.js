import "./TaskCard.css";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import TaskInput from "../TaskInput/TaskInput";
import TaskButton from "../TaskButton/TaskButton";
import { useState } from "react";

export default function TaskCard({ title, id, setTask, tasks }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const deleteTask = (id) => {
    const data = [...tasks];
    const result = data.filter((el) => el.id !== id);
    setTask(result);
  };

  const editTask = (id, newText) => {
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
      {!isEdit && (
        <div className="taskCard">
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
                setIsEdit(true);
              }}
            >
              <BiEdit />
            </span>
            <span
              onClick={() => {
                deleteTask(id);
              }}
            >
              <FaTrash />
            </span>
          </div>
        </div>
      )}
      {isEdit && (
        <div className="editTask">
          <TaskInput inputValue={inputValue} setInputValue={setInputValue} />
          <TaskButton
            isDisabled={inputValue ? false : true}
            onClick={() => {
              setIsEdit(false);
              editTask(id, inputValue);
            }}
            value={"Edit"}
          />
        </div>
      )}
    </div>
  );
}
