import { UserSliceState } from "@/modules/user/domain/User";
import {
  createUserSession,
  getRequestToken,
  validateRequestToken,
} from "@/modules/user/infrastructure/userServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserSliceState = {
  userSession: {
    success: false,
    session_id: "",
  },
  requestToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserSession.fulfilled, (state, action) => {
        state.userSession = action.payload;
      })
      .addCase(createUserSession.rejected, (state, action) => {
        state.userSession = {
          success: false,
          session_id: "",
        };
      });

    builder
      .addCase(getRequestToken.fulfilled, (state, action) => {
        state.requestToken = action.payload.request_token;
      })
      .addCase(getRequestToken.rejected, (state, action) => {
        state.requestToken = "";
      });

    builder
      .addCase(validateRequestToken.fulfilled, (state, action) => {
        state.requestToken = action.payload.request_token;
      })
      .addCase(validateRequestToken.rejected, (state, action) => {
        state.requestToken = "";
      });
  },
});

export const userReducer = userSlice.reducer;
