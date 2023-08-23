import "./Button.css";

export default function Button({ value, onClick, activeButton }) {
  return (
    <button
      className={`curency-button ${
        activeButton === value ? "activ-button" : "non-active-button"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
