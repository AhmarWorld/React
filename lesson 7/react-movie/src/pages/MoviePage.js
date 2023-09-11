import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Path from '../components/Path/Path';
import MovieHeader from '../components/MovieHeader/MovieHeader';
import ActorList from '../components/ActorList/ActorList';

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

    const getMovieCharacteristic = () => {
        const result = {
            runtime: '',
            budget: '$',
            revenue: '$'
        }

        let runtimeH = Math.floor(movieData.runtime / 60)
        let runtimeM = movieData.runtime % 60
        result.runtime = `${runtimeH}h ${runtimeM}m`

        result.budget = result.budget + movieData.budget

        result.revenue = result.revenue + movieData.revenue

        return result
    }

    return (
        <div className="page">
            <Path title={movieData.original_title} />
            <MovieHeader
                runtime={getMovieCharacteristic().runtime}
                budget={getMovieCharacteristic().budget}
                revenue={getMovieCharacteristic().revenue}
                cardImg={movieData.poster_path}
                backImg={movieData.backdrop_path}
                title={movieData.title}
                text={movieData.overview}
                rate={Math.round(movieData.vote_average * 100) / 100}
            />
            <ActorList />
        </div>
    )
}
