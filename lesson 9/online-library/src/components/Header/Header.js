import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BsFillHeartFill } from "react-icons/bs";

export default function Header() {


  return (
    <header>
      <h1>
        <Link to={"/"}>Book Finder</Link>
      </h1>
      <Link to={"/wish"}>
        <Button icon={<BsFillHeartFill color="tomato" />}>WishList</Button>
      </Link>
    </header>
  );
}
