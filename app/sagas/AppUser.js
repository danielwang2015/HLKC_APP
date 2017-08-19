import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import { API_HOST } from '../common/config';
import { setAccessToken , setSignON} from '../common/token';


export function* handleLoadAppUserInfo(action) {
  try {
    const { local_access_token } = action.payload;

    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/user`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }
    const response = yield call(axios, apiConfig);
    
    yield put({type: types.AppUser_INFO, payload: response.data});
  } catch (e) {
    console.log(e);
  }
}

export function* handleUserSignOn(action) {
  try {
    const { local_access_token } = action.payload;

    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/SignIn/{1}`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }
    console.log("user sign on start call");
    const response = yield call(axios, apiConfig);
    //here need to handle sign on result
    setSignON(response.data);
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadAppUserInfo() {
  //yield takeEvery('Load_User_INFO', handleLoadAppUserInfo);
  yield takeEvery('USER_SIGN_ON', handleUserSignOn);
}
