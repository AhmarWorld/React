import "./ClientsRate.css";

export default function ClientsRate({ text, name, src, stars }) {
  return (
    <div className="clients-rate">
      <p>{text}</p>
      <h4>{name}</h4>
      <div
        style={{
          background: `url(${src}), lightgray 50% / cover no-repeat`,
        }}
        className="clients_img"
      ></div>
      <div className="stars">
        {[...new Array(stars)].map(() => {
          return <img src="./assets/Star.svg"></img>;
        })}
        {[...new Array(5 - stars)].map(() => {
          return <img src="./assets/Star-background.svg"></img>;
        })}
      </div>
    </div>
  );
}
