import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/MovieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    console.log("top rated", json.results);
    dispatch(addTopRatedMovies(json.results)); // ✅ pass the data here
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
