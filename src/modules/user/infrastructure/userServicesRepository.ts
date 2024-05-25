import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserRepository } from "../domain/UserRepository";
import customFetch from "@/sections/shared/utils/customFetch/customFetch";
import endpoints from "@/sections/shared/utils/api/endpoints/endpoints";
import {
  UserCredentials,
  UserRequestTokenResponse,
  UserSessionApiResponse,
} from "../domain/User";

export const userRepository = (): UserRepository => {
  return { getRequestToken, createUserSession, validateRequestToken };
};

export const getRequestToken = createAsyncThunk<UserRequestTokenResponse>(
  "user/getRequestToken",
  async () => {
    const { data, success } = await customFetch(
      "GET",
      endpoints.getRequestToken,
    );

    if (!success) {
      return {
        expires_at: "",
        request_token: "",
        success: false,
      };
    }

    return data as UserRequestTokenResponse;
  },
);

export const createUserSession = createAsyncThunk<
  UserSessionApiResponse,
  { requestToken: string }
>("user/createUserSession", async ({ requestToken }) => {
  const { data, success } = await customFetch("POST", endpoints.createSession, {
    body: {
      request_token: requestToken,
    },
  });

  if (!success) {
    return {
      session_id: "",
      success: false,
    };
  }

  return data as UserSessionApiResponse;
});

export const validateRequestToken = createAsyncThunk<
  UserRequestTokenResponse,
  { userCredentials: UserCredentials }
>("user/validateRequestToken", async ({ userCredentials }) => {
  const { data, success } = await customFetch(
    "POST",
    endpoints.validateCredentials,
    {
      body: {
        ...userCredentials,
      },
    },
  );

  if (!success) {
    return {
      request_token: "",
      success: false,
      expires_at: "",
    };
  }

  return data as UserRequestTokenResponse;
});
