import "./PlayerCard.css";

export default function PlayerCard({ name, score, currentPoints, isCurrent }) {
  return (
    <div className="player-card" id={`${isCurrent && "current-player"}`}>
      <div className="player-card_head">
        <h1>{name}</h1>
        <p>{score}</p>
      </div>
      <div className="palyer-card_foot">
        <span style={{ fontSize: "16px", color: "#EDDAC6FF" }}>
          CURRENT POINTS
        </span>
        <span style={{ fontSize: "20px", color: "white" }}>
          {currentPoints}
        </span>
      </div>
    </div>
  );
}
