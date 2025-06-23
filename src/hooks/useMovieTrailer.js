import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // ✅ Get current trailerVideo from Redux store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const json = await data.json();
    console.log("video", json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // ✅ Store trailer in Redux
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // ✅ Memoize: only fetch if not already present
    if (!trailerVideo) getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
