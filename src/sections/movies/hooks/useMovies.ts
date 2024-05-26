import {
  getMovieListById,
  updateMovieListById,
} from "@/modules/lists/application/list";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const useMovies = () => {
  const { movie } = useAppSelector((state) => state.movies);
  const { list, listId } = useAppSelector((state) => state.lists);
  const { userSession } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const checkMovieAddedToFavs = (movieId: number) => {
    const foundMovie = list.items?.find((item) => movieId === item.id);
    return Boolean(foundMovie);
  };

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
    setIsAddedToFavs: (value: boolean) => void,
    movieId: number,
  ) => {
    const localStorageId = localStorage.getItem("listId");
    const idToFetch = listId !== 0 ? listId : localStorageId;

    event.preventDefault();
    event.stopPropagation();

    await updateMovieListById(
      repositories.lists,
      dispatch,
      idToFetch?.toString()!,
      userSession.session_id,
      movieId.toString(),
    );

    await getMovieListById(
      repositories.lists,
      dispatch,
      idToFetch?.toString()!,
    );

    setIsAddedToFavs(checkMovieAddedToFavs(movieId));
  };

  return { checkMovieAddedToFavs, handleButtonClick };
};

export default useMovies;
