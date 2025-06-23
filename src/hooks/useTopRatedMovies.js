import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // ✅ Check Redux store for topRatedMovies
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("top rated", json.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    // ✅ Only fetch if not already fetched
    if (!topRatedMovies || topRatedMovies.length === 0) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;
