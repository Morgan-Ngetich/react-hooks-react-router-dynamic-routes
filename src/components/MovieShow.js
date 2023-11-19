import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}) {
  //Call useParams to access the "params" from the URL
  const params = useParams();
  console.log("Params:", params);

  return (
    <div>
      {/* Here we access the "movieID" stored in "params" to render information about the selected movie */}
      <h3>
        {movies[params.movieId].title}
      </h3>
    </div>
  );
}

export default MovieShow;