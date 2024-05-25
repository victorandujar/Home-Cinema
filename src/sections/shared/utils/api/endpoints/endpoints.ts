import environments from "../../environments/environments";

const endpoints = {
  nowPlayingMovies: `${environments.apiUrl}movie/now_playing`,
  getMovieById: `${environments.apiUrl}movie`,
  getRequestToken: `${environments.apiUrl}authentication/token/new`,
  createSession: `${environments.apiUrl}authentication/session/new`,
  validateCredentials: `${environments.apiUrl}authentication/token/validate_with_login`,
};

export default endpoints;
