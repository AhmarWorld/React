import { useState, useEffect } from "react";
import Path from "../components/Path/Path";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import ActorList from "../components/ActorList/ActorList";
import { useLoaderData } from "react-router-dom";

export default function MoviePage() {
  const loaderData = useLoaderData();

  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    loaderData.credits.crew.forEach((el) => {
      if (el.job === "Director") {
        setDirectors([...directors, el.name]);
      }
    });

    let temporaryActors = [];

    loaderData.credits.cast.forEach((el) => {
      if (el.known_for_department === "Acting") {
        temporaryActors.push(el);
        setActors(temporaryActors);
      }
    });
  }, [loaderData]);

  const getMovieCharacteristic = () => {
    const result = {
      runtime: "",
      budget: "$",
      revenue: "$",
    };

    let runtimeH = Math.floor(loaderData.movieData.runtime / 60);
    let runtimeM = loaderData.movieData.runtime % 60;
    result.runtime = `${runtimeH}h ${runtimeM}m`;

    let resultBudget = [];
    let budgetArray = `${loaderData.movieData.budget}`.split("").reverse();

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
    let revenueArray = `${loaderData.movieData.revenue}`.split("").reverse();
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
      <Path title={loaderData.movieData.original_title} />
      <MovieHeader
        runtime={getMovieCharacteristic().runtime}
        budget={getMovieCharacteristic().budget}
        revenue={getMovieCharacteristic().revenue}
        cardImg={loaderData.movieData.poster_path}
        backImg={loaderData.movieData.backdrop_path}
        title={loaderData.movieData.title}
        text={loaderData.movieData.overview}
        rate={Math.round(loaderData.movieData.vote_average * 100) / 100}
        director={directors[0]}
      />
      <ActorList actors={actors} />
    </div>
  );
}
