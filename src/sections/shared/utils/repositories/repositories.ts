import { moviesRepository } from "@/modules/movies/infrastructure/moviesServicesRepository";
import { userRepository } from "@/modules/user/infrastructure/userServicesRepository";

const moviesRepo = moviesRepository();
const userRepo = userRepository();

const repositories = {
  movies: moviesRepo,
  user: userRepo,
};

export default repositories;
