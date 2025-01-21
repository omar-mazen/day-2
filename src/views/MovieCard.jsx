const MovieCard = function ({ movie }) {
  return (
    <li className="movie-card" key={movie.id}>
      <figure className="movie-poster">
        <img src={movie.poster} alt={`poster of ${movie.name} movie`} />
      </figure>
      <p title={movie.name} className="movie-name">
        {movie.name}
      </p>
    </li>
  );
};
export default MovieCard;
