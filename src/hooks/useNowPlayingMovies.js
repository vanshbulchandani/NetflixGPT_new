import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // ✅ Access Redux store to check if movies already exist
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // ✅ Fetch only if not already in store
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
