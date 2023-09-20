import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../store/useBooks";

export default function BookList() {
  const books = useBooks((state) => state.books);

  setTimeout(() => {
    // console.log(books);
  }, 2000);

  return (
    <section className="book-list">
      {books.map((book) => {
        return <BookCard />;
      })}
    </section>
  );
}
