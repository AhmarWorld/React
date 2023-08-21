import "./TaskInput.css";

export default function TaskInput({ inputValue, setInputValue }) {
  const onChange = (e) => {
    const value = e.currentTarget.value;
    setInputValue(value);
  };
  return (
    <input
      className="taskInput"
      placeholder="Введите новое задание"
      value={inputValue}
      onChange={onChange}
    />
  );
}
