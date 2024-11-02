import { useEffect, useState } from "react";
import "./movieFetcher.css";
import Movie from "./movie";
import React from "react";

const MovieFetcher = ({ movieName }) => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const key = "7f9a3b82";
      const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "False") {
          setError(new Error(data.Error));
          setMovieData(null);
        } else {
          setMovieData(data);
          setError(null);
        }
      } catch (error) {
        setError(error);
        setMovieData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieName]);
  if (loading)
    return (
      <div className="enter-movie-box">
        <p className="enter-movie-text">Loading....</p>
      </div>
    );
  if (error)
    return (
      <div className="enter-movie-box">
        <p className="enter-movie-text">Error: {error.message}</p>
      </div>
    );
  return (
    <Movie
      Poster={movieData.Poster}
      Title={movieData.Title}
      imdbRating={movieData.imdbRating}
      Rated={movieData.Rated}
      Year={movieData.Year}
      Runtime={movieData.Runtime}
      Genre={movieData.Genre}
      Plot={movieData.Plot}
      Actors={movieData.Actors}
    />
  );
};

export default MovieFetcher;
