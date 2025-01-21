import MovieCard from "./MovieCard";

const MoviesList = function ({ list, title }) {
  return (
    <section className="movie-list">
      <p className="list-title">{title}</p>
      <ul>
        {list.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ul>
    </section>
  );
};
export default MoviesList;
