import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/slices/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing";
    const data = await fetch(url, API_OPTIONS);
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
};

export default useNowPlayingMovies;
