import { UserSliceState } from "@/modules/user/domain/User";
import { getUserSession } from "@/modules/user/infrastructure/userServicesRepository";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserSliceState = {
  userSession: {
    success: false,
    expires_at: "",
    guest_session_id: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserSession.fulfilled, (state, action) => {
      state.userSession = action.payload;
    });
    builder.addCase(getUserSession.rejected, (state, action) => {
      state.userSession = {
        success: false,
        expires_at: "",
        guest_session_id: "",
      };
    });
  },
});

export const userReducer = userSlice.reducer;
