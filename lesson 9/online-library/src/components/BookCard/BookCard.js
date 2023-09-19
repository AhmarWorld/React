import "./BookCard.css";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function BookCard() {
  const [wishButtonColor, setWishButtonColor] = useState("");

  const onClick = () => {
    if (wishButtonColor) {
      setWishButtonColor("");
    } else {
      setWishButtonColor("tomato");
    }
  };

  return (
    <div className="book-card">
      <div className="book-card_content">
        <div onClick={onClick} className="wishlist-button">
          <AiFillHeart color={wishButtonColor || "gray"} /> wishlist
        </div>
      </div>
      <button>But on amanoz</button>
    </div>
  );
}
