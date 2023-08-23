import "./Input.css";

export default function Input({ inputValue, setInputValue }) {
  const onChange = (el) => {
    setInputValue(el.target.value);
  };
  return <input type="number" value={inputValue} onChange={onChange} />;
}
