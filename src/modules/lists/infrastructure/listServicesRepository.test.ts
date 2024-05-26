import { configureStore } from "@reduxjs/toolkit";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import {
  createMoviesList,
  deleteMovieListById,
  getMovieListById,
  updateMovieListById,
} from "./listServicesRepository";
import { List, ListApiResponse } from "../domain/List";
import { listsReducer } from "@/store/features/listsSlice/listSlice";
import { mockFullList } from "@/mocks/listsMocks";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const store = configureStore({
  reducer: {
    list: listsReducer,
  },
});

const mockList: List = {
  name: "My List",
  description: "This is my list of favorite movies.",
};

const mockListApiResponse: ListApiResponse = {
  success: true,
  list_id: 123,
};

describe("Given a createMoviesList function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("Then it should create movies list successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockListApiResponse,
      });

      const response = await store.dispatch(
        createMoviesList({ session_id: "abcd1234", list: mockList }),
      );

      expect(response.payload).toEqual(mockListApiResponse);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("Then it should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        list_id: 0,
      });

      const response = await store.dispatch(
        createMoviesList({ session_id: "abcd1234", list: mockList }),
      );

      expect(response.payload).toEqual({
        success: false,
        list_id: 0,
      });
    });
  });
});

describe("Given a getMovieListById function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("Then it should get movie list by ID successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockFullList,
      });

      const response = await store.dispatch(
        getMovieListById({ list_id: "123" }),
      );

      expect(response.payload).toEqual(mockFullList);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("Then it should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        data: {},
      });

      const response = await store.dispatch(
        getMovieListById({ list_id: "123" }),
      );

      expect(response.payload).toEqual({});
    });
  });
});

describe("Given a deleteMovieListById function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("Then it should delete movie list successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: {},
      });

      const response = await store.dispatch(
        deleteMovieListById({ list_id: "123", session_id: "abcd1234" }),
      );

      expect(response.payload).toEqual({ success: true });
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("Then it should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        data: {},
      });

      const response = await store.dispatch(
        deleteMovieListById({ list_id: "123", session_id: "abcd1234" }),
      );

      expect(response.payload).toEqual({ success: false });
    });
  });
});

describe("Given an updateMovieListById function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("Then it should update the movie list successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
      });

      const response = await store.dispatch(
        updateMovieListById({
          list_id: "123",
          session_id: "abcd1234",
          media_id: "567",
        }),
      );

      expect(response.payload).toEqual({ success: true });
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("Then it should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
      });

      const response = await store.dispatch(
        updateMovieListById({
          list_id: "123",
          session_id: "abcd1234",
          media_id: "567",
        }),
      );

      expect(response.payload).toEqual({ success: false });
    });
  });
});
