import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/MovieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // ✅ Access Redux store to check for existing data
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("upcoming", json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    // ✅ Avoid refetching if data is already in store
    if (!upcomingMovies || upcomingMovies.length === 0) {
      getUpcomingMovies();
    }
  }, []);
};

export default useUpcomingMovies;
