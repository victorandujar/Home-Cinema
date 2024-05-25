export interface UserSessionApiResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface UserSliceState {
  userSession: UserSessionApiResponse;
}
