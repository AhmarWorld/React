import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BsFillHeartFill } from "react-icons/bs";
import { useBooks } from "../../store/useBooks";

export default function Header() {
  const clearBooks = useBooks((state) => state.clearBooks)
  const onClick = () => {
    clearBooks()
  }

  return (
    <header>
      <h1>
        <Link to={"/"}>Book Finder</Link>
      </h1>
      <Link to={"/wish"}>
        <Button onClick={onClick} icon={<BsFillHeartFill color="tomato" />}>WishList</Button>
      </Link>
    </header>
  );
}
