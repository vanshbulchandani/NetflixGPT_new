import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {title}
      </h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4 md:gap-6">
          {movies.map((movie) => (
            <Moviecard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
