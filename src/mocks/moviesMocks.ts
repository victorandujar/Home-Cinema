import {
  FullMovie,
  Movie,
  MovieImage,
  NowPlayingMoviesApiResponse,
} from "@/modules/movies/domain/Movies";

export const mockMovies: Movie[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

export const mockMovie: FullMovie = {
  adult: false,
  backdrop_path: "/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg",
  belongs_to_collection: {
    id: 8945,
    name: "Mad Max Collection",
    poster_path: "/5q63RIHE6SeLlaOaUWLL9vMcwsu.jpg",
    backdrop_path: "/7ECkRbU1OvDCDLxUv5YBBDxfGF3.jpg",
  },
  budget: 150000000,
  genres: [
    { id: 878, name: "Science Fiction" },
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
  ],
  homepage: "https://www.furiosaamadmaxsaga.com",
  id: 786892,
  imdb_id: "tt12037194",
  origin_country: ["AU", "US"],
  original_language: "en",
  original_title: "Furiosa: A Mad Max Saga",
  overview:
    "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
  popularity: 1090.011,
  poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  production_companies: [
    {
      id: 174,
      logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
    {
      id: 28382,
      logo_path: "/xqE1fjLynj3RaZca9chctZQyfzZ.png",
      name: "Kennedy Miller Mitchell",
      origin_country: "AU",
    },
  ],
  production_countries: [
    { iso_3166_1: "AU", name: "Australia" },
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2024-05-22",
  revenue: 0,
  runtime: 149,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "Fury is born.",
  title: "Furiosa: A Mad Max Saga",
  video: false,
  vote_average: 7.58,
  vote_count: 88,
};
