import "./Input.css";

export default function Input({
  submitted,
  inputValue,
  setInputValue,
  placeholder,
}) {
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="form-field"
        type="text"
        placeholder={placeholder}
      />
      {submitted && !inputValue ? (
        <span>Please enter a {placeholder}</span>
      ) : null}
    </>
  );
}
