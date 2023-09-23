import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../store/useBooks";

export default function BookList() {
  const books = useBooks((state) => state.books);

  return (
    <section className="book-list">
      {books.map((book) => {
        let link = 'https://www.amazon.com.br/s?k='
        if (!book.saleInfo.isEbook) {
          link = link + book.volumeInfo.title
        }
        return <BookCard
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          date={book.volumeInfo.publishedDate}
          authors={book.volumeInfo.authors}
          subTitle={book.volumeInfo.publisher}
          img={book.volumeInfo.imageLinks.thumbnail}
          description={book.volumeInfo.description}
          link={book.saleInfo.isEbook ? book.saleInfo.buyLink : link}
          buy={book.saleInfo.isEbook ? 'Google Play' : 'Amazon'}
        />;
      })}
    </section>
  );
}