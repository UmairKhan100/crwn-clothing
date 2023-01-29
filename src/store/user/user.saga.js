import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
import { signInFailed, signInSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* getSnapshotFromAuth(user, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      user,
      additionalDetails
    );

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield call(getCurrentUser);
    if (!user) return;
    yield call(getSnapshotFromAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
