import { useState } from "react";
import { useBooks } from "../../store/useBooks";
import SerchBar from "../SerchBar/SerchBar";
import "./MainSection.css";

export default function MainSection() {
  const getBooks = useBooks((state) => state.getBooks);

  const [inputValue, setInputValue] = useState("");
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    getBooks(inputValue);
    setInputValue("");
  };

  return (
    <section className="main-section">
      <div className="search">
        <h1>Search book</h1>
        <SerchBar
          inputValue={inputValue}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
      <img
        src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg"
        alt=""
      />
    </section>
  );
}
