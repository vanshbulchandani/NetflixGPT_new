import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-20 -mt-20 md:-mt-40">
      {/* -mt-20 for small screens, -mt-40 for larger screens */}
      <div className="bg-gradient-to-b from-black via-black/80 to-black">
        <div className="space-y-8 md:space-y-12 pt-8 md:pt-16">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.nowPlayingMovies} />
          <MovieList title="Top Rated" movies={movies.nowPlayingMovies} />
          <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Action" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
