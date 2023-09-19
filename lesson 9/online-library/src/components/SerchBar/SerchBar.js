import Button from "../Button/Button";
import "./SerchBar.css";

export default function SerchBar() {
  return (
    <div className="search-bar">
      <input type="text" name="" id=" " placeholder="Search a book" />
      <Button children={"Search"} color={"rgb(222, 102, 102)"} />
    </div>
  );
}
