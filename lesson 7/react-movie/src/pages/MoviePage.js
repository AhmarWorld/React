import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Path from "../components/Path/Path";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import ActorList from "../components/ActorList/ActorList";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState([{}]);
  const [creditsData, setCreditsData] = useState({ cast: [{}], crew: [{}] });
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const API_KEY = "dc31091a1c1df71a3d2f7df5909d1976";
  const movieLoader = async (value, endpoint) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}${endpoint}?api_key=${API_KEY}&include_adult=false&language=en-EN&page=1`
    );
    if (!res.ok) {
      navigate("/");
    }
    const data = await res.json();
    value(data);
  };

  useEffect(() => {
    movieLoader(setMovieData);
    movieLoader(setCreditsData, "/credits");
  }, []);

  useEffect(() => {
    creditsData.crew.forEach((el) => {
      if (el.job === "Director") {
        setDirectors([...directors, el.name]);
      }
    });

    let temporaryActors = [];

    creditsData.cast.forEach((el) => {
      if (el.known_for_department === "Acting") {
        temporaryActors.push(el);
        setActors(temporaryActors);
      }
    });
  }, [creditsData]);

  const getMovieCharacteristic = () => {
    const result = {
      runtime: "",
      budget: "$",
      revenue: "$",
    };

    let runtimeH = Math.floor(movieData.runtime / 60);
    let runtimeM = movieData.runtime % 60;
    result.runtime = `${runtimeH}h ${runtimeM}m`;

    let resultBudget = [];
    let budgetArray = `${movieData.budget}`.split("").reverse();

    for (let i = 0; i < budgetArray.length; i++) {
      if ((i + 1) % 3 === 0 && i + 1 !== budgetArray.length) {
        resultBudget.push(budgetArray[i]);
        resultBudget.push(".");
      } else {
        resultBudget.push(budgetArray[i]);
      }
    }
    result.budget = result.budget + resultBudget.reverse().join("");

    let resultRevenue = [];
    let revenueArray = `${movieData.revenue}`.split("").reverse();
    for (let i = 0; i < revenueArray.length; i++) {
      if ((i + 1) % 3 === 0 && i + 1 !== revenueArray.length) {
        resultRevenue.push(revenueArray[i]);
        resultRevenue.push(".");
      } else {
        resultRevenue.push(revenueArray[i]);
      }
    }
    result.revenue = result.revenue + resultRevenue.reverse().join("");

    return result;
  };

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
        director={directors[0]}
      />
      <ActorList actors={actors} />
    </div>
  );
}
