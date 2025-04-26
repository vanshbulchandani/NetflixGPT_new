import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  useNowPlayingMovies(); // 👈 This will trigger the fetch and store update

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  console.log(mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default Maincontainer;
