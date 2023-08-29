import "./ConvertArea.css";
import Input from "../Input/Input";
import ButtonSwitcher from "../ButtonSwitcher/ButtonSwitcher";

export default function ConvertArea({
  curencyArray,
  inputValue,
  onChange,
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
      <Input inputValue={inputValue} onChange={onChange} />
    </div>
  );
}
