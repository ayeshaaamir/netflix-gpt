import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ title = "Movies", movies = [] }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h2 className="text-white text-2xl py-4 ml-6">
        {title}
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 pl-6 pr-2">
          {movies.map((movie) => (
            <div className="shrink-0 w-36 md:w-48" key={movie.id}>
              <MovieCard posterPath={movie.poster_path} />
            </div>
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
