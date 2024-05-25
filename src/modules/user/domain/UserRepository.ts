import { AsyncThunk } from "@reduxjs/toolkit";
import { UserSessionApiResponse } from "./User";

export interface UserRepository {
  getUserSession: AsyncThunk<UserSessionApiResponse, void, {}>;
}
