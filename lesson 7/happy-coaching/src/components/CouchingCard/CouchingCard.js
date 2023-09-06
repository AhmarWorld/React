import "./CouchingCard.css";

export default function CouchingCard({ svg, title, text }) {
  return (
    <div className="couching">
      {svg}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
