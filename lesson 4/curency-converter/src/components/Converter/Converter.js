import "./Converter.css";
import ConvertArea from "../ConvertArea/ConvertArea";
import { useState } from "react";

export default function Converter() {
  const [inputValueOne, setInputValueOne] = useState(1);
  const [inputValueTwo, setInputValueTwo] = useState(1);
  const curencyArray = ["KZT", "USD", "EUR", "GBP"];
  const [activeButtonOne, setActiveButtonOne] = useState(curencyArray[0]);
  const [activeButtonTwo, setActiveButtonTwo] = useState(curencyArray[0]);

  return (
    <div className="main">
      <ConvertArea
        inputValue={inputValueOne}
        setInputValue={setInputValueOne}
        curencyArray={curencyArray}
        setActiveButton={setActiveButtonOne}
        activeButton={activeButtonOne}
      />
      <ConvertArea
        inputValue={inputValueTwo}
        setInputValue={setInputValueTwo}
        curencyArray={curencyArray}
        setActiveButton={setActiveButtonTwo}
        activeButton={activeButtonTwo}
      />
    </div>
  );
}
