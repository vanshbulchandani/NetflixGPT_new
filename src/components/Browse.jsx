import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SeconaryContainer from "./SeconaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      <Maincontainer />
      <SeconaryContainer />
    </div>
  );
};

export default Browse;
