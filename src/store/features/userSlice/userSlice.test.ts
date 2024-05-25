import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import {
  createUserSession,
  getRequestToken,
  validateRequestToken,
} from "@/modules/user/infrastructure/userServicesRepository";
import {
  UserSessionApiResponse,
  UserRequestTokenResponse,
  UserSliceState,
} from "@/modules/user/domain/User";
import { userReducer } from "./userSlice";

const middlewares = [thunk];
const mockStore = configureStore(middlewares as never);

const initialState: UserSliceState = {
  userSession: {
    success: false,
    session_id: "",
  },
  requestToken: "",
};

let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore(initialState);
});

describe("Given a userSlice", () => {
  describe("When it receives a new state and the action to load user session is pending", () => {
    test("Then it should handle createUserSession.pending", () => {
      const action = { type: createUserSession.pending.type };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
      });
    });
  });

  describe("When it receives a new state and the action to load user session is fulfilled", () => {
    test("Then it should handle createUserSession.fulfilled", () => {
      const payload: UserSessionApiResponse = {
        success: true,
        session_id: "guest123",
      };
      const action = { type: createUserSession.fulfilled.type, payload };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        userSession: payload,
      });
    });
  });

  describe("When it receives a new state and the action to load user session is rejected", () => {
    test("Then it should handle createUserSession.rejected", () => {
      const action = {
        type: createUserSession.rejected.type,
        error: { message: "Failed to load" },
      };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        userSession: {
          success: false,
          session_id: "",
        },
      });
    });
  });

  describe("When it receives a new state and the action to get request token is fulfilled", () => {
    test("Then it should handle getRequestToken.fulfilled", () => {
      const payload: UserRequestTokenResponse = {
        success: true,
        request_token: "abcd1234",
        expires_at: "2024-12-31T23:59:59Z",
      };
      const action = { type: getRequestToken.fulfilled.type, payload };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        requestToken: payload.request_token,
      });
    });
  });

  describe("When it receives a new state and the action to get request token is rejected", () => {
    test("Then it should handle getRequestToken.rejected", () => {
      const action = {
        type: getRequestToken.rejected.type,
        error: { message: "Failed to load" },
      };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        requestToken: "",
      });
    });
  });

  describe("When it receives a new state and the action to validate request token is fulfilled", () => {
    test("Then it should handle validateRequestToken.fulfilled", () => {
      const payload: UserRequestTokenResponse = {
        success: true,
        request_token: "abcd1234",
        expires_at: "2024-12-31T23:59:59Z",
      };
      const action = { type: validateRequestToken.fulfilled.type, payload };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        requestToken: payload.request_token,
      });
    });
  });

  describe("When it receives a new state and the action to validate request token is rejected", () => {
    test("Then it should handle validateRequestToken.rejected", () => {
      const action = {
        type: validateRequestToken.rejected.type,
        error: { message: "Failed to load" },
      };
      const state = userReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        requestToken: "",
      });
    });
  });
});
