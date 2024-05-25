import environments from "../../environments/environments";

const endpoints = {
  nowPlayingMovies: `${environments.apiUrl}movie/now_playing`,
  getMovieById: `${environments.apiUrl}movie`,
  getUserSession: `${environments.apiUrl}authentication/guest_session/new`,
};

export default endpoints;
