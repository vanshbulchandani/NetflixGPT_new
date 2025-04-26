import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="px-6 mt-[90vh] relative z-10 bg-transparent">
      {/* Title */}
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      {/* Movie Cards Horizontal Scroll */}
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <Moviecard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
