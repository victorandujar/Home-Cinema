import { MoviesRepository } from "../domain/MoviesRepository";
import {
  MoviesSliceState,
  NowPlayingMoviesApiResponse,
} from "../domain/Movies";
import { AppDispatch } from "@/store/store";

export const fetchNowPlayingMovies = async (
  moviesRepository: MoviesRepository,
  dispatch: AppDispatch,
  page: number,
  language: string,
): Promise<{
  data?: NowPlayingMoviesApiResponse;
  success?: boolean;
  error?: string;
}> => {
  const action = await dispatch(
    moviesRepository.getNowPlayingMovies({ page, language }),
  );

  if (moviesRepository.getNowPlayingMovies.fulfilled.match(action)) {
    return { data: action.payload.data, success: true };
  } else {
    return {
      error: (action.payload as MoviesSliceState).error!,
      success: false,
    };
  }
};
