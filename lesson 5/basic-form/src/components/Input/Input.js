import "./Input.css";

export default function Input({ submitted, inputValue, setInputValue, id, placeholder }) {
    return (
        <>
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            id={id}
            className="form-field"
            type="text"
            placeholder={placeholder}
            name={id}
            />
            {submitted && !inputValue ? <span id={`${id}-error`}>Please enter a {placeholder}</span> : null}
        </>
    )
}