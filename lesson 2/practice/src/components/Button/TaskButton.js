import "../../App.css";

export default function TaskButton({ value, func, buttonState }) {
  return (
    <button disabled={buttonState} className="taskButton" onClick={func}>
      {value}
    </button>
  );
}
