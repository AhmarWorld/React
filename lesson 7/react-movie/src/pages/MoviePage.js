import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Path from '../components/Path/Path';

export default function MoviePage() {
    const { id } = useParams()
    const [movieData, setMovieData] = useState([{}])
    const API_KEY = 'dc31091a1c1df71a3d2f7df5909d1976'
    const movieLoader = async (value) => {

        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&include_adult=false&language=en-EN&page=1`)
        const data = await res.json()
        value(data)
    }

    useEffect(() => {
        movieLoader(setMovieData)
    }, [])

    return (
        <div className="page">
            <Path title={movieData.original_title} />
        </div>
    )
}
