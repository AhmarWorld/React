import Button from "../Button/Button";
import "./SerchBar.css";

export default function SerchBar({ inputValue, onChange, onClick }) {
  return (
    <div className="search-bar">
      <input
        value={inputValue}
        onChange={onChange}
        placeholder="Search a book"
      />
      <Button
        onClick={onClick}
        children={"Search"}
        color={"rgb(222, 102, 102)"}
      />
    </div>
  );
}
