import PropTypes from "prop-types";

const GPTMovieSuggestions = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-72 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-bold text-white">{movie.title}</h2>
          <p className="text-gray-300 text-sm mt-2 line-clamp-3">
            {movie.overview}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Release Date: {movie.release_date}
          </p>
        </div>
      ))}
    </div>
  );
};

GPTMovieSuggestions.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};

export default GPTMovieSuggestions;
