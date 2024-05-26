import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import {
  createMoviesList,
  deleteMovieListById,
  getMovieListById,
} from "@/modules/lists/infrastructure/listServicesRepository";
import { List, ListsSliceState, FullList } from "@/modules/lists/domain/List";
import { listsReducer } from "./listSlice";
import { mockFullList } from "@/mocks/listsMocks";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

const initialState: ListsSliceState = {
  loading: false,
  list: {} as List,
  listId: 0,
  lists: [],
  success: false,
};

let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore(initialState);
});

describe("Given a listsSlice", () => {
  describe("When it receives a new state and the action to create a movies list & request is not fulfilled", () => {
    test("Then it should handle createMoviesList.pending", () => {
      const action = { type: createMoviesList.pending.type };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe("When it receives a new state and the action to create a movies list & request is fulfilled", () => {
    test("Then it should handle createMoviesList.fulfilled", () => {
      const payload = { success: true, list_id: 123 };
      const action = { type: createMoviesList.fulfilled.type, payload };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: false,
        listId: 123,
      });
      expect(localStorage.getItem("listId")).toBe("123");
    });
  });

  describe("When it receives a new state and the action to create a movies list & request is rejected", () => {
    test("Then it should handle createMoviesList.rejected", () => {
      const error = { message: "Failed to create list" };
      const action = { type: createMoviesList.rejected.type, error };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: false,
      });
    });
  });

  describe("When it receives a new state and the action to get a movie list by ID & request is pending", () => {
    test("Then it should handle getMovieListById.pending", () => {
      const action = { type: getMovieListById.pending.type };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe("When it receives a new state and the action to get a movie list by ID & request is fulfilled", () => {
    test("Then it should handle getMovieListById.fulfilled", () => {
      const payload: FullList = mockFullList;

      const stateWithListId = { ...initialState, listId: 123 };

      const action = { type: getMovieListById.fulfilled.type, payload };
      const state = listsReducer(stateWithListId, action);

      expect(state).toEqual({
        ...stateWithListId,
        loading: false,
        lists: [payload],
      });
    });
  });

  describe("When it receives a new state and the action to get a movie list by ID & request is rejected", () => {
    test("Then it should handle getMovieListById.rejected", () => {
      const error = { message: "Failed to fetch list" };
      const action = { type: getMovieListById.rejected.type, error };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: false,
      });
    });
  });
});

describe("When it receives a new state and the action to delete a movie list & request is pending", () => {
  test("Then it should handle deleteMovieListById.pending", () => {
    const action = { type: deleteMovieListById.pending.type };
    const state = listsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loading: true,
    });
  });
});

describe("When it receives a new state and the action to delete a movie list & request is fulfilled", () => {
  test("Then it should handle deleteMovieListById.fulfilled", () => {
    const payload = { success: true };
    const action = { type: deleteMovieListById.fulfilled.type, payload };
    const state = listsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loading: false,
      success: true,
      lists: [],
      listId: 0,
    });
  });

  describe("When it receives a new state and the action to delete a movie list & request is rejected", () => {
    test("Then it should handle deleteMovieListById.rejected", () => {
      const error = { message: "Failed to delete list" };
      const action = { type: deleteMovieListById.rejected.type, error };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: false,
      });
    });
  });
});
