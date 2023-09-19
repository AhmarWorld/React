import BookList from "../components/BookList/BookList";
import MainSection from "../components/MainSection/MainSection";

export default function HomePage() {
  return (
    <div className="page">
      <MainSection />
      <BookList />
    </div>
  );
}
