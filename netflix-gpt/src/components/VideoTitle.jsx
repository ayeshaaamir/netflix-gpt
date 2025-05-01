import PropTypes from "prop-types";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-24 px-6 md:px-12 max-w-3xl text-white">
      <h1 className="text-3xl md:text-6xl font-bold leading-tight">{title}</h1>
      <p className="py-4 md:py-6 text-base md:text-lg max-w-xl">{overview}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center bg-white text-black font-bold py-3 px-6 text-base md:text-lg rounded hover:bg-gray-200 transition">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center justify-center bg-gray-800 text-white font-bold py-3 px-6 text-base md:text-lg rounded hover:bg-gray-700 transition">
          <FaInfoCircle className="mr-2" /> More Info
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
