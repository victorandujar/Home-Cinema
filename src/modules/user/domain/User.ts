export interface UserSessionApiResponse {
  success: boolean;
  session_id: string;
}

export interface UserRequestTokenResponse {
  success: boolean;
  request_token: string;
  expires_at: string;
}

export interface UserSliceState {
  userSession: UserSessionApiResponse;
  requestToken: string;
}

export interface UserCredentials {
  username: string;
  password: string;
  request_token: string;
}
