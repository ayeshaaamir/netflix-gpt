import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ title = "Movies", movies = [] }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-6">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-4">
        {title}
      </h2>

      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-3 md:space-x-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array,
};

export default MovieList;
