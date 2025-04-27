import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  useNowPlayingMovies(); // Fetch and update store

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="w-full bg-black">
      <div className="relative w-full h-[100vh]">
        {/* Title and Description */}
        <VideoTitle
          title={mainMovie.original_title}
          overview={mainMovie.overview}
        />
        {/* Background Video */}
        <VideoBackground movieId={mainMovie.id} />
      </div>
    </div>
  );
};

export default Maincontainer;
