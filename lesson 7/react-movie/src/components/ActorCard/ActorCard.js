import './ActorCard.css';

export default function ActorCard({ img, actor, character }) {
    return (
        <div className="actor-card">
            <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="" />
            <h3>{actor}</h3>
            <p>{character}</p>
        </div>
    )
}