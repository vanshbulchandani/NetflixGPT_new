import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies wala", movies.nowPlayingMovies);

  return (
    <div className="relative z-20 -mt-25">
      {/* z-20 to bring it above background */}
      <div className="bg-black">
        <div className="space-y-4">
          {" "}
          {/* Adjust space between movie lists */}
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
