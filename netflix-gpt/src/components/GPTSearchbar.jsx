import { useSelector } from "react-redux";
import { NETFLIX_BG_IMG } from "../utils/constants";
import language from "../utils/languageConstants";

const GPTSearchbar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="relative w-full h-screen text-white">
      <img
        src={NETFLIX_BG_IMG}
        alt="Netflix background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 -z-10" />

      <div className="pt-32 flex justify-center">
        <form className="flex items-center max-w-2xl w-full px-4">
          <input
            type="text"
            placeholder={language[langKey].GPTSearchPlaceholder}
            className="w-full px-4 py-2 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 transition"
          >
            {language[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchbar;
