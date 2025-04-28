import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/MovieSlice";

const useUpcomgMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("top rated", json.results);
    dispatch(addUpcomingMovies(json.results)); // ✅ pass the data here
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomgMovies;
