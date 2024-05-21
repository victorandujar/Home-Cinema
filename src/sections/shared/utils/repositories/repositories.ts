import { moviesRepository } from "@/modules/movies/infrastructure/moviesServicesRepository";

const moviesRepo = moviesRepository();

const repositories = {
  movies: moviesRepo,
};

export default repositories;
