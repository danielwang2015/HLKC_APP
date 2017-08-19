import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import { API_HOST } from '../common/config';
import { setAccessToken } from '../common/token';


export function* handleLoadStudentInfo(action) {
  try {
    const { local_access_token } = action.payload;

    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/student`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }
    const response = yield call(axios, apiConfig);
    yield put({type: types.STUDENT_INFO, payload: response.data});
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadStudentInfo() {
  yield takeEvery('LOAD_STUDENT_INFO', handleLoadStudentInfo);
}
