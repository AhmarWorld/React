import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BsFillHeartFill } from "react-icons/bs";
import { useBooks } from "../../store/useBooks";

export default function Header() {
  const getWishlist = useBooks((state) => state.getWishlist)

  const onClick = () => {
    getWishlist()
  }

  return (
    <header>
      <h1>
        <Link to={"/"}>Book Finder</Link>
      </h1>
      <Link onClick={onClick} to={"/wish"}>
        <Button icon={<BsFillHeartFill color="tomato" />}>WishList</Button>
      </Link>
    </header>
  );
}
