import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserRepository } from "../domain/UserRepository";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import endpoints from "@/sections/shared/utils/api/endpoints/endpoints";
import { UserSessionApiResponse } from "../domain/User";

export const userRepository = (): UserRepository => {
  return { getUserSession };
};

export const getUserSession = createAsyncThunk<UserSessionApiResponse>(
  "user/getUserSession",
  async () => {
    const { data, success } = await customFetch(
      "GET",
      endpoints.getUserSession,
    );

    if (!success) {
      return {
        expires_at: "",
        guest_session_id: "",
        success: false,
      };
    }

    return data as UserSessionApiResponse;
  },
);
