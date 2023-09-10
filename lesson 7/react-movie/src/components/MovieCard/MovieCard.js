import { Link } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard({ img, id }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className="movie-card" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }} >
            </div>
        </Link>
    )
}