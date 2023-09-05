import Button from "../Button/Button";
import "./TitleCard.css";

export default function TitleCard({ textOne, textTwo, textThree, value }) {
  return (
    <div className="text-card">
      <div className="text-card__title">
        <h5>{textOne}</h5>
        <h1>{textTwo}</h1>
      </div>
      <p>{textThree}</p>
      <Button value={value} width={"250px"} height={"42px"} />
    </div>
  );
}
