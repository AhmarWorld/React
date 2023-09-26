import { useBooks } from '../../store/useBooks';
import BookCard from '../BookCard/BookCard';
import './WishList.css';

export default function WishList() {
    const wishBooks = useBooks((state) => state.wishlist)
    console.log(wishBooks);
    return (
        <div className="wish-list_cards">
            {wishBooks.map((el) => {
                return (
                    <BookCard
                        key={el.id}
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