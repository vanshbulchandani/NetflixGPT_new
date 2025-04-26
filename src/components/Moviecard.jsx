import React from "react";
import { IMG_CDN } from "../utils/constants";

const Moviecard = ({ PosterPath }) => {
  return (
    <div className="min-w-[150px] md:min-w-[200px] hover:scale-105 transition-transform duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w300${PosterPath}`}
        alt="Movie Poster"
        className="w-full rounded-xl shadow-md"
      />
    </div>
  );
};

export default Moviecard;
