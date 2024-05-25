import { AsyncThunk } from "@reduxjs/toolkit";
import {
  UserRequestTokenResponse,
  UserSessionApiResponse,
  UserCredentials,
} from "./User";

export interface UserRepository {
  getRequestToken: AsyncThunk<UserRequestTokenResponse, void, {}>;
  createUserSession: AsyncThunk<
    UserSessionApiResponse,
    { requestToken: string },
    {}
  >;
  validateRequestToken: AsyncThunk<
    UserRequestTokenResponse,
    { userCredentials: UserCredentials },
    {}
  >;
}
