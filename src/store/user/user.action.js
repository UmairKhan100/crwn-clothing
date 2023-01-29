import { USER_ACTION_TYPES } from "./user.types";

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});

export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILED,
  payload: error,
});
