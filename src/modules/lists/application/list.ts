import { AppDispatch } from "@/store/store";
import { ListRepository } from "../domain/ListRepository";
import { FullList, List, ListApiResponse } from "../domain/List";

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

export const getMovieListById = async (
  listRepository: ListRepository,
  dispatch: AppDispatch,
  list_id: string,
): Promise<FullList> => {
  const action = await dispatch(listRepository.getMovieListById({ list_id }));

  if (listRepository.getMovieListById.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {} as FullList;
  }
};
