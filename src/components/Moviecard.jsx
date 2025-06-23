import React from "react";

const Moviecard = ({ PosterPath }) => {
  if (!PosterPath) return null;
  return (
    <div className="min-w-[120px] md:min-w-[160px] lg:min-w-[180px] hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w300${PosterPath}`}
        alt="Movie Poster"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default Moviecard;
