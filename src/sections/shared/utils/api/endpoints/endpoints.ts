import environments from "../../environments/environments";

const endpoints = {
  nowPlayingMovies: `${environments.apiUrl}3/movie/now_playing`,
  getMovieById: `${environments.apiUrl}3/movie`,
};

export default endpoints;
