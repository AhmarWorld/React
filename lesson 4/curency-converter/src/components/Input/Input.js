import "./Input.css";

export default function Input({ inputValue, onChange }) {
  return <input type="number" value={inputValue} onChange={onChange} />;
}
