import { AppDispatch } from "@/store/store";
import { UserRepository } from "../domain/UserRepository";
import { UserSessionApiResponse } from "../domain/User";

export const getUserSession = async (
  userRepository: UserRepository,
  dispatch: AppDispatch,
): Promise<UserSessionApiResponse> => {
  const action = await dispatch(userRepository.getUserSession());

  if (userRepository.getUserSession.fulfilled.match(action)) {
    return action.payload;
  } else {
    return {
      expires_at: "",
      guest_session_id: "",
      success: false,
    };
  }
};
