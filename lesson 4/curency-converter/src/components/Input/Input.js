import "./Input.css";

export default function Input({ inputValue, setInputValue }) {
  return (
    <input
      type="number"
      value={inputValue}
      onChange={(el) => {
        if (el.target.value < 0) {
          setInputValue(0);
        } else {
          setInputValue(el.target.value);
        }
      }}
    />
  );
}
