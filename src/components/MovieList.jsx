import React from "react";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="px-6 md:px-12 relative z-10">
      {/* Section Title */}
      <h1 className="text-xl md:text-3xl font-bold text-white mb-4">{title}</h1>

      {/* Movie Cards Horizontal Scroll */}
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        <div className="flex space-x-4 md:space-x-6">
          {movies.map((movie) => (
            <Moviecard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
