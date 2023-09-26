import { useBooks } from '../../store/useBooks';
import BookCard from '../BookCard/BookCard';
import './WishList.css';

export default function WishList() {
    const wishBooks = useBooks((state) => state.wishlist)
    return (
        <div className="wish-list_cards">
            {wishBooks.map((el, i) => {
                return (
                    <BookCard
                        key={i}
                        isEbook={el.isEbook}
                        id={el.id}
                        title={el.title}
                        date={el.date}
                        authors={el.authors[0]}
                        subTitle={el.subTitle}
                        img={el.img}
                        description={el.description}
                        link={el.link}
                        buy={el.buy}
                        wishState={"tomato"}
                    />
                )
            })}
        </div>
    )
}