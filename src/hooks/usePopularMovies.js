import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addPopularMovies } from "../utils/MovieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("popular", json.results);
    dispatch(addPopularMovies(json.results)); // ✅ pass the data here
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
