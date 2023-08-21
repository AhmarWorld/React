import "./TaskButton.css";

export default function TaskButton({ value, onClick, isDisables }) {
  return (
    <button disabled={isDisables} className="taskButton" onClick={onClick}>
      {value}
    </button>
  );
}
