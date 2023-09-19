import SerchBar from "../SerchBar/SerchBar";
import "./MainSection.css";

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="search">
        <h1>Search book</h1>
        <SerchBar />
      </div>
      <img
        src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg"
        alt=""
      />
    </section>
  );
}
