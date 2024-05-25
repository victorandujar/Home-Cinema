import { configureStore } from "@reduxjs/toolkit";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import { UserSessionApiResponse } from "@/modules/user/domain/User";
import { userReducer } from "@/store/features/userSlice/userSlice";
import { getUserSession } from "./userServicesRepository";

jest.mock("../../../sections/shared/utils/customFetch/customFetch");

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const mockUserSession: UserSessionApiResponse = {
  success: true,
  expires_at: "2024-01-01T00:00:00Z",
  guest_session_id: "guest123",
};

describe("Given a getUserSession function", () => {
  describe("When it is called and it is fulfilled", () => {
    test("should fetch user session successfully", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: true,
        data: mockUserSession,
      });

      const response = await store.dispatch(getUserSession());

      expect(response.payload).toEqual(mockUserSession);
    });
  });

  describe("When it is called and the response is rejected", () => {
    test("should handle fetch error", async () => {
      (customFetch as jest.Mock).mockResolvedValue({
        success: false,
        error: "Failed to load",
      });

      const response = await store.dispatch(getUserSession());

      expect(response.payload).toEqual({
        expires_at: "",
        guest_session_id: "",
        success: false,
      });
    });
  });
});
