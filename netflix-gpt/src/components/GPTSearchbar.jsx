import { useSelector } from "react-redux";
import { API_OPTIONS, NETFLIX_BG_IMG } from "../utils/constants";
import language from "../utils/languageConstants";
import { useRef, useState } from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const HARDCODED_MOVIES = [
  "Titanic",
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "The Matrix",
];

const GPTSearchbar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const [movieResults, setMovieResults] = useState([]);

  const searchMovieTMDB = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await res.json();
    return data.results[0];
  };

  const handleGPTSearchClick = async () => {
    const results = [];
    for (const movie of HARDCODED_MOVIES) {
      const data = await searchMovieTMDB(movie);
      if (data) results.push(data);
    }
    setMovieResults(results);
  };

  return (
    <div className="relative w-full min-h-screen text-white pb-20">
      <img
        src={NETFLIX_BG_IMG}
        alt="Netflix background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 -z-10" />

      <div className="pt-32 flex justify-center">
        <form
          className="flex items-center max-w-2xl w-full px-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            placeholder={language[langKey].GPTSearchPlaceholder}
            className="w-full px-4 py-2 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
          />
          <button
            onClick={handleGPTSearchClick}
            type="submit"
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-r-md hover:bg-red-700 transition"
          >
            {language[langKey].search}
          </button>
        </form>
      </div>

      <div className="mt-12 px-4 flex justify-center">
        <GPTMovieSuggestions movies={movieResults} />
      </div>
    </div>
  );
};

export default GPTSearchbar;
