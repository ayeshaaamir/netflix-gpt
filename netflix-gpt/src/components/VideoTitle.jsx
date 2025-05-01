import PropTypes from "prop-types";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white max-w-2xl space-y-4 px-4 md:px-12">
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{title}</h1>

      <p className="hidden md:block text-lg font-medium leading-relaxed drop-shadow-md">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 text-lg rounded hover:bg-gray-200 transition duration-200 shadow-md">
          <FaPlay className="text-xl" />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-3 px-6 text-lg rounded hover:bg-gray-600 transition duration-200 shadow-md bg-opacity-80">
          <FaInfoCircle className="text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
};

export default VideoTitle;
