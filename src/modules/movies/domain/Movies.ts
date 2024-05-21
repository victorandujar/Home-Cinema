export interface Movie {
  id: string;
  adult: boolean;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface NowPlayingMoviesApiResponse {
  page: number;
  results: Movie[];
}

export interface MoviesSliceState {
  loading: boolean;
  movies: Movie[];
  error: string | null;
}
