import { listRepository } from "@/modules/lists/infrastructure/listServicesRepository";
import { moviesRepository } from "@/modules/movies/infrastructure/moviesServicesRepository";
import { userRepository } from "@/modules/user/infrastructure/userServicesRepository";

const moviesRepo = moviesRepository();
const userRepo = userRepository();
const listsRepo = listRepository();

const repositories = {
  movies: moviesRepo,
  user: userRepo,
  lists: listsRepo,
};

export default repositories;
