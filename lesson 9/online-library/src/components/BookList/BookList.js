import "./BookList.css";
import BookCard from "../BookCard/BookCard";

export default function BookList({ books }) {
  return (
    <section className="book-list">
      {/* {books.map((book) => {
        return <BookCard />;
      })} */}
      <BookCard />
    </section>
  );
}
