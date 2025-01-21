import axios from "axios";
import MovieModel from "../models/MovieModel";
//
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUwYzZiZjRiNjI1ZTI2MmYwNTI4M2RmY2VmM2U2MyIsIm5iZiI6MTY5MjAxMTczNS4wOTIsInN1YiI6IjY0ZGEwY2Q3MzcxMDk3MDBmZmI3MDkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.369on5yO7WwKdX6GzfkCMvOsieTSE_ZHY4A8Yq-xiIY",
  },
};
export default class MoviesControllers {
  static async getPopularMovies() {
    const data = (await axios.request(options))?.data?.results;
    return data.map(
      (movie) =>
        new MovieModel({
          id: movie.id,
          title: movie.title,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          poster_path: movie.poster_path,
          backdrop_path: movie.backdrop_path,
          overview: movie.overview,
        })
    );
  }
}
