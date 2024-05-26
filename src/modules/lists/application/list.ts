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

export const deleteMovieListById = async (
  listRepository: ListRepository,
  dispatch: AppDispatch,
  list_id: string,
  session_id: string,
): Promise<{ success: boolean }> => {
  const action = await dispatch(
    listRepository.deleteMovieListById({ list_id, session_id }),
  );

  if (listRepository.deleteMovieListById.fulfilled.match(action)) {
    return { success: action.payload.success };
  } else {
    return { success: false };
  }
};

export const updateMovieListById = async (
  listRepository: ListRepository,
  dispatch: AppDispatch,
  list_id: string,
  session_id: string,
  media_id: string,
): Promise<{ success: boolean }> => {
  const action = await dispatch(
    listRepository.updateMovieListById({ list_id, session_id, media_id }),
  );

  if (listRepository.updateMovieListById.fulfilled.match(action)) {
    return { success: action.payload.success };
  } else {
    return { success: false };
  }
};
