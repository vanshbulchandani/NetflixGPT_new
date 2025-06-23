import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    // In GptMovieSuggestions.js
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
      <div className="relative z-10 px-4 md:px-8 py-6 space-y-10">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
