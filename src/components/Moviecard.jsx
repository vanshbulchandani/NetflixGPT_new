import React from "react";

const Moviecard = ({ PosterPath }) => {
  return (
    <div className="min-w-[140px] md:min-w-[200px] hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w300${PosterPath}`}
        alt="Movie Poster"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Moviecard;
