import "./ConvertArea.css";
import Input from "../Input/Input";
import ButtonSwitcher from "../ButtonSwitcher/ButtonSwitcher";

export default function ConvertArea({
  curencyArray,
  inputValue,
  setInputValue,
  setActiveButton,
  activeButton,
}) {
  return (
    <div className="convert-card">
      <ButtonSwitcher
        setActiveButton={setActiveButton}
        buttonValues={curencyArray}
        activeButton={activeButton}
      />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}
