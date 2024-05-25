import configureStore from "redux-mock-store";
import { createMoviesList } from "@/modules/lists/infrastructure/listServicesRepository";
import { List, ListsSliceState } from "@/modules/lists/domain/List";
import { thunk } from "redux-thunk";
import { listsReducer } from "./listSlice";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

const initialState: ListsSliceState = {
  loading: false,
  list: {} as List,
  listId: 0,
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
        loading: true,
        list: {} as List,
        listId: 0,
      });
    });
  });

  describe("When it receives a new state and the action to create a movies list & request is fulfilled", () => {
    test("Then it should handle createMoviesList.fulfilled", () => {
      const payload = { success: true, list_id: 123 };
      const action = { type: createMoviesList.fulfilled.type, payload };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        list: {} as List,
        listId: 123,
      });
    });
  });

  describe("When it receives a new state and the action to create a movies list & request is rejected", () => {
    test("Then it should handle createMoviesList.rejected", () => {
      const error = { message: "Failed to create list" };
      const action = { type: createMoviesList.rejected.type, error };
      const state = listsReducer(initialState, action);

      expect(state).toEqual({
        loading: false,
        list: {} as List,
        listId: 0,
      });
    });
  });
});
