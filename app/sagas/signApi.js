import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import { API_HOST } from '../common/config';
import { getAccessToken, setAccessToken, setUserID } from '../common/token';

export function* handleSignInRequest(action) {
  try {
    const { userName, password } = action.payload;

    const formData = new FormData();
    formData.append('U_LoginName', userName);
    formData.append('Password', password);

    const apiConfig = {
      method: 'post',
      url: `${API_HOST}/api/jwt`,
      data: formData,
    };

    const response = yield call(axios, apiConfig);
    yield setAccessToken(response.data.access_token);
    yield setUserID(response.data.U_ID);
    yield put({type: types.SIGN_IN_SUCCEEDED, payload: response.data});
  } catch (e) {
    console.log(e);
  }
}

export function* watchSignInRequest() {
  yield takeEvery(types.SIGN_IN_API_REQUEST, handleSignInRequest);
}
