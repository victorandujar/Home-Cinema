import {
  Movie,
  MovieImage,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";

export const mockMovies: Movie[] = [
  {
    id: "1",
    adult: false,
    original_language: "en",
    original_title: "Movie One",
    overview: "This is the overview of Movie One.",
    poster_path: "/path/to/poster1.jpg",
    release_date: "2024-01-01",
    title: "Movie One",
    vote_average: 7.5,
    vote_count: 1000,
  },
  {
    id: "2",
    adult: false,
    original_language: "en",
    original_title: "Movie Two",
    overview: "This is the overview of Movie Two.",
    poster_path: "/path/to/poster2.jpg",
    release_date: "2024-02-01",
    title: "Movie Two",
    vote_average: 8.0,
    vote_count: 1500,
  },
  {
    id: "3",
    adult: false,
    original_language: "es",
    original_title: "Película Tres",
    overview: "Este es el resumen de la Película Tres.",
    poster_path: "/path/to/poster3.jpg",
    release_date: "2024-03-01",
    title: "Película Tres",
    vote_average: 6.5,
    vote_count: 500,
  },
  {
    id: "4",
    adult: false,
    original_language: "fr",
    original_title: "Film Quatre",
    overview: "Voici le résumé du Film Quatre.",
    poster_path: "/path/to/poster4.jpg",
    release_date: "2024-04-01",
    title: "Film Quatre",
    vote_average: 7.8,
    vote_count: 1200,
  },
  {
    id: "5",
    adult: false,
    original_language: "de",
    original_title: "Film Fünf",
    overview: "Dies ist die Zusammenfassung von Film Fünf.",
    poster_path: "/path/to/poster5.jpg",
    release_date: "2024-05-01",
    title: "Film Fünf",
    vote_average: 7.2,
    vote_count: 800,
  },
];

export const mockImages: MovieImage[] = [
  {
    id: 1,
    src: "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg",
    alt: "Avengers",
  },
  {
    id: 2,
    src: "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg",
    alt: "Catwoman",
  },
  {
    id: 3,
    src: "https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg",
    alt: "Inception",
  },
  {
    id: 4,
    src: "https://w0.peakpx.com/wallpaper/700/371/HD-wallpaper-joker-movie-8k-banner.jpg",
    alt: "Joker",
  },
];

export const mockMoviesApiResponse: NowPlayingMoviesApiResponse = {
  page: 1,
  results: mockMovies,
  total_pages: 10,
};
