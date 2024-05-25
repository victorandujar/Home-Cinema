import { configureStore } from "@reduxjs/toolkit";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import { userReducer } from "@/store/features/userSlice/userSlice";
import {
  createUserSession,
  getRequestToken,
  validateRequestToken,
} from "./userServicesRepository";
import {
  UserRequestTokenResponse,
  UserSessionApiResponse,
  UserCredentials,
} from "@/modules/user/domain/User";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const mockUserSession: UserSessionApiResponse = {
  success: true,
  session_id: "guest123",
};

const mockRequestTokenResponse: UserRequestTokenResponse = {
  success: true,
  request_token: "abcd1234",
  expires_at: "2024-12-31T23:59:59Z",
};

const mockUserCredentials: UserCredentials = {
  username: "testuser",
  password: "testpass",
  request_token: "abcd1234",
};

describe("Given a createUserSession function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("should fetch user session successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockUserSession,
      });

      const response = await store.dispatch(
        createUserSession({ requestToken: "qwerty" }),
      );

      expect(response.payload).toEqual(mockUserSession);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Failed to load",
      });

      const response = await store.dispatch(
        createUserSession({ requestToken: "qwerty" }),
      );

      expect(response.payload).toEqual({
        session_id: "",
        success: false,
      });
    });
  });
});

describe("Given a getRequestToken function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("should fetch request token successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockRequestTokenResponse,
      });

      const response = await store.dispatch(getRequestToken());

      expect(response.payload).toEqual(mockRequestTokenResponse);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Failed to load",
      });

      const response = await store.dispatch(getRequestToken());

      expect(response.payload).toEqual({
        request_token: "",
        success: false,
        expires_at: "",
      });
    });
  });
});

describe("Given a validateRequestToken function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("should validate request token successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockRequestTokenResponse,
      });

      const response = await store.dispatch(
        validateRequestToken({ userCredentials: mockUserCredentials }),
      );

      expect(response.payload).toEqual(mockRequestTokenResponse);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Failed to load",
      });

      const response = await store.dispatch(
        validateRequestToken({ userCredentials: mockUserCredentials }),
      );

      expect(response.payload).toEqual({
        request_token: "",
        success: false,
        expires_at: "",
      });
    });
  });
});
