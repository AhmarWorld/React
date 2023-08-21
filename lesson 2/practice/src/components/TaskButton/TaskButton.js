import "./TaskButton.css";

export default function TaskButton({ value, onClick, isDisabled }) {
  return (
    <button disabled={isDisabled} className="taskButton" onClick={onClick}>
      {value}
    </button>
  );
}
