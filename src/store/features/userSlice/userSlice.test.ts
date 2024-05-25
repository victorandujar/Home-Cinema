import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import {
  UserSessionApiResponse,
  UserSliceState,
} from "@/modules/user/domain/User";
import { userReducer } from "./userSlice";
import { getUserSession } from "@/modules/user/infrastructure/userServicesRepository";

const middlewares = [thunk];
const mockStore = configureStore(middlewares as any);

const initialState: UserSliceState = {
  userSession: {
    success: false,
    expires_at: "",
    guest_session_id: "",
  },
};

let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore(initialState);
});

describe("Given a userSlice", () => {
  describe("When it receives a new state and the action to load user session & request is not fulfilled", () => {
    test("Then it should handle getUserSession.pending", () => {
      const action = { type: getUserSession.pending.type };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        userSession: {
          success: false,
          expires_at: "",
          guest_session_id: "",
        },
      });
    });
  });

  describe("When it receives a new state and the action to load user session & request is fulfilled", () => {
    test("Then it should handle getUserSession.fulfilled", () => {
      const payload: UserSessionApiResponse = {
        success: true,
        expires_at: "2024-01-01T00:00:00Z",
        guest_session_id: "guest123",
      };
      const action = { type: getUserSession.fulfilled.type, payload };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        userSession: {
          success: true,
          expires_at: "2024-01-01T00:00:00Z",
          guest_session_id: "guest123",
        },
      });
    });
  });

  describe("When it receives a new state and the action to load user session & request is rejected", () => {
    test("Then it should handle getUserSession.rejected", () => {
      const action = {
        type: getUserSession.rejected.type,
        error: { message: "Failed to load" },
      };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        userSession: {
          success: false,
          expires_at: "",
          guest_session_id: "",
        },
      });
    });
  });
});
