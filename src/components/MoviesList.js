import React from 'react';
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>
        {movies[movieID].title}
      </Link>
    </li>
  ))
  return (
    <div>
      <ul>
        {renderMovies}
      </ul>
    </div>
  )
}

export default MovieList