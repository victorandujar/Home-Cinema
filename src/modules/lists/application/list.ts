import { AppDispatch } from "@/store/store";
import { ListRepository } from "../domain/ListRepository";
import { List, ListApiResponse } from "../domain/List";

export const createMoviesList = async (
  listRepository: ListRepository,
  dispatch: AppDispatch,
  session_id: string,
  list: List,
): Promise<ListApiResponse> => {
  const action = await dispatch(
    listRepository.createMoviesList({ list, session_id }),
  );

  if (listRepository.createMoviesList.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {
      list_id: 0,
      success: false,
    };
  }
};
