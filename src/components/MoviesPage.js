import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  //useRouteMatch, returns a special onject with information about the currently matched route
  //it gives as an object that contains the current matched route
  const match = useRouteMatch();
  console.log("Match:", match)
  return (
    <div>
      <MoviesList movies={movies} />
       {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}

      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
