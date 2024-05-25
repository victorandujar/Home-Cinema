import { AppDispatch } from "@/store/store";
import { UserRepository } from "../domain/UserRepository";
import {
  UserCredentials,
  UserRequestTokenResponse,
  UserSessionApiResponse,
} from "../domain/User";

export const createUserSession = async (
  userRepository: UserRepository,
  dispatch: AppDispatch,
  requestToken: string,
): Promise<UserSessionApiResponse> => {
  const action = await dispatch(
    userRepository.createUserSession({ requestToken }),
  );

  if (userRepository.createUserSession.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {
      session_id: "",
      success: false,
    };
  }
};

export const getRequestTokenSession = async (
  userRepository: UserRepository,
  dispatch: AppDispatch,
): Promise<UserRequestTokenResponse> => {
  const action = await dispatch(userRepository.getRequestToken());

  if (userRepository.getRequestToken.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {
      expires_at: "",
      request_token: "",
      success: false,
    };
  }
};

export const validateRequestToken = async (
  userRepository: UserRepository,
  dispatch: AppDispatch,
  userCredentials: UserCredentials,
): Promise<UserRequestTokenResponse> => {
  const action = await dispatch(
    userRepository.validateRequestToken({ userCredentials }),
  );

  if (userRepository.validateRequestToken.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {
      request_token: "",
      success: false,
      expires_at: "",
    };
  }
};
