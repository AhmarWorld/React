import WishList from "../components/WishList/WishList";
import WishlistHeader from "../components/WishlistHeader/WishlistHeader";


export default function WishListPage() {
    return (
        <div className="wish">
            <WishlistHeader />
            <WishList />
        </div>
    )
}