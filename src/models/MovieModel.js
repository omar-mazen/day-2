export default class MovieModel {
  constructor({
    id,
    title,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
    overview,
  }) {
    this.id = id;
    this.name = title;
    this.overview = overview;
    this.voteAverage = vote_average;
    this.voteCount = vote_count;
    this.poster = "https://image.tmdb.org/t/p/w500/" + poster_path;
    this.backdrop = "https://image.tmdb.org/t/p/original/" + backdrop_path;
  }
}
