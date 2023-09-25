import { useBooks } from '../../store/useBooks';
import BookCard from '../BookCard/BookCard';
import './WishList.css';

export default function WishList() {
    const wishBooks = useBooks((state) => state.wishlist)
    console.log(wishBooks);
    return (
        <div className="wish-list_cards">
            {/* {wishBooks.map((el) => {
                return (
                    <BookCard
                        key={el.id}
                    />
                )
            })} */}
            <BookCard />
        </div>
    )
}