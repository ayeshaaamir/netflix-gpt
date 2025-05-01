import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return <div>Loading...</div>;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <VideoBackground movieId={id} />

      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 bg-gradient-to-r from-black via-transparent to-transparent z-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
