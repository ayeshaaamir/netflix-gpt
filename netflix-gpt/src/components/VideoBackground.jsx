import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slices/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
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
    getMovieVideo();
  }, [movieId]);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute top-0 left-0 w-full -z-10 h-[100vh] overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
