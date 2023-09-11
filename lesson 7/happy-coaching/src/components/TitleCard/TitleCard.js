import Button from "../Button/Button";
import "./TitleCard.css";

export default function TitleCard({
  textOne,
  textOnevTwo,
  textTwo,
  textTwovTwo,
  textThree,
  value,
}) {
  return (
    <div className="text-card">
      <div className="text-card__title">
        {textOne && <h5>{textOne}</h5>}
        {textTwo && <h1>{textTwo}</h1>}
        {textTwovTwo && <h2>{textTwovTwo}</h2>}
        {textOnevTwo && <h5>{textOnevTwo}</h5>}
      </div>
      <p>{textThree}</p>
      <Button value={value} width={"250px"} height={"42px"} />
    </div>
  );
}
