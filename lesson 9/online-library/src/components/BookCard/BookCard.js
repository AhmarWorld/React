import "./BookCard.css";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useBooks } from "../../store/useBooks";

export default function BookCard({
  id,
  title,
  date,
  authors,
  subTitle,
  img,
  description,
  link,
  buy,
}) {
  const [wishButtonColor, setWishButtonColor] = useState("");

  const addWishlist = useBooks((state) => state.addWishlist)
  const deleteWishlist = useBooks((state) => state.deleteWishlist)

  const onClick = () => {
    if (wishButtonColor) {
      setWishButtonColor("");
      deleteWishlist(id)
    } else {
      setWishButtonColor("tomato");
      addWishlist({
        id,
        title,
        date,
        authors,
        subTitle,
        img,
        description,
        link,
        buy,
      })
    }
  };

  return (
    <div className="book-card">
      <div className="book-card_content">
        <div onClick={onClick} className="wishlist-button">
          <AiFillHeart color={wishButtonColor || "gray"} /> wishlist
        </div>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{authors}</p>
        <p>{subTitle}</p>
        <img src={img} alt="" />
        <p className="scroll-text">{description}</p>
      </div>
      <a rel="noreferrer" target="_blank" href={link} className="amazon">
        Buy on {buy}
      </a>
    </div>
  );
}
