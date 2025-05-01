import { IMG_CDN_URL } from "../utils/constants";
import PropTypes from "prop-types";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-28 md:w-36 flex-shrink-0 transition-transform transform hover:scale-105 duration-200">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie card"
        className="rounded-md object-cover w-full h-full"
      />
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
};

export default MovieCard;
