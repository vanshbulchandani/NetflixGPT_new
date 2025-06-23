import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addPopularMovies } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // ✅ Check if popularMovies already exist in the store
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("popular", json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // ✅ Fetch only if not already in store
    if (!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
