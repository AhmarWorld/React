import "./ButtonSwitcher.css";
import Button from "../Button/Button";

export default function ButtonSwither({
  buttonValues,
  setActiveButton,
  activeButton,
}) {
  const onClick = (newValue) => {
    setActiveButton(newValue);
  };
  return (
    <div className="course_button_switch__container">
      {buttonValues.map((buttonValue) => {
        return (
          <Button
            key={buttonValue}
            onClick={() => onClick(buttonValue)}
            value={buttonValue}
            activeButton={activeButton}
          />
        );
      })}
    </div>
  );
}
