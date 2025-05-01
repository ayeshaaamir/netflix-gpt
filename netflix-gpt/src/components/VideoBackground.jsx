import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
