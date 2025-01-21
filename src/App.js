import { useEffect, useState } from "react";
import MoviesControllers from "./controllers/MoviesController";
import MoviesList from "./views/MoviesList";
import Explore from "./components/Explore";
import NavBar from "./components/NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(function () {
    (async () =>
      setPopularMovies(await MoviesControllers.getPopularMovies()))();
    return () => setIsLoading(false);
  }, []);
  if (isLoading)
    return (
      <div className="loading">
        <p>loading...</p>
      </div>
    );
  return (
    <>
      <NavBar />
      <main className="container">
        <Explore movie={popularMovies[popularMovies.length - 1]} />
        <MoviesList list={popularMovies} title="New Release" />
        <MoviesList list={popularMovies} title="New Release" />
        <MoviesList list={popularMovies} title="New Release" />
        <MoviesList list={popularMovies} title="New Release" />
      </main>
    </>
  );
}

export default App;
