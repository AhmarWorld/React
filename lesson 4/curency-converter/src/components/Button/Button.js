import "./Button.css";

export default function Button({ value, onClick }) {
  return (
    <button
      className={`curency-button ${isActiv && "activ-button"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
