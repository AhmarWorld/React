import { useState, useEffect } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Count:", count);
  //   }, [count]);

  useEffect(() => {
    console.log("Проект запущен");
  }, []);

  const onPlus = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const onMinus = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div className="counter__container">
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <div>
        <button onClick={onMinus} className="counter_button minus">
          - Минус
        </button>
        <button onClick={onPlus} className="counter_button plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}
