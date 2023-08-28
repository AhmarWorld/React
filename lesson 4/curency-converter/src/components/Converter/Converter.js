import "./Converter.css";
import ConvertArea from "../ConvertArea/ConvertArea";
import { useState, useEffect } from "react";
import { fetchCourseData } from '../../lib/fetchCourseData';

export default function Converter() {
  const [inputValueOne, setInputValueOne] = useState(1);
  const [inputValueTwo, setInputValueTwo] = useState(1);
  const curencyArray = ["KZT", "USD", "EUR", "GBP"];
  const [activeButtonOne, setActiveButtonOne] = useState(curencyArray[0]);
  const [activeButtonTwo, setActiveButtonTwo] = useState(curencyArray[0]);
  const [curencyData, setCurencyData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchCourseData();
      setCurencyData(courseData.rates);
      console.log(courseData.rates);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const value = inputValueOne*(curencyData[activeButtonTwo] / curencyData[activeButtonOne])
    setInputValueTwo(Math.round(value*100)/100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValueOne, activeButtonOne, activeButtonTwo])

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
