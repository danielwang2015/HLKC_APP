import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import { API_HOST } from '../common/config';
import { setAccessToken } from '../common/token';


export function* handleRefreshJwtToken(action) {
  try {
    const { local_access_token } = action.payload;

    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/jwt`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }
    
    const response = yield call(axios, apiConfig);
    yield setAccessToken(response.data.access_token);
    yield put({type: types.SIGN_IN_SUCCEEDED, payload: response.data});
  } catch (e) {
    console.log(e);
  }
}

export function* watchRefreshJwtToken() {
  yield takeEvery('REFRESH_JWT_TOKEN', handleRefreshJwtToken);
}
