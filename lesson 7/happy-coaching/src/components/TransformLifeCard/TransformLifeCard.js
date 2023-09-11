import "./TransformLifeCard.css";

export default function TransformLifeCard({ circleValue }) {
  return (
    <div className="transform-card">
      <div className="transform-box"></div>
      <div className="guide-circle">{circleValue}</div>
    </div>
  );
}
