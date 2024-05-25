import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import {
  createMoviesList,
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

  // New tests for getMovieListById actions
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

      const action = { type: getMovieListById.fulfilled.type, payload };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
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
