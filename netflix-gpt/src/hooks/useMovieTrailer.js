import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const data = await fetch(url, API_OPTIONS);
    const res = await data.json();
    const filtered = res.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailer = filtered.length ? filtered[0] : res.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);
};
