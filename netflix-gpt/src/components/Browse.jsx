import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
