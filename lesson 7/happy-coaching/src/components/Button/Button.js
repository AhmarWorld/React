import "./Button.css";

export default function Button({ onclick, value, width, height }) {
  return (
    <button
      className="button"
      onclick={onclick}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {value}
    </button>
  );
}
