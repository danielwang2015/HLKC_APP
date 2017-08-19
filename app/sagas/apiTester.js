import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import { LOCAL_ACCESS_TOKEN_NAME } from '../common/config';

export function* handleApiRequest(action) {
  try {
    const { local_access_token } = action.payload;
    const apiConfig = {
      method: 'get',
      url: 'http://localhost:5000/api/User',
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }

    const response = yield call(axios, apiConfig);
    console.log(response);
    // yield put({type: 'API_REQUEST_SUCCEEDED', payload: response.data });
  } catch (e) {
    console.log(e);
    // yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchApiRequest() {
  yield takeEvery('API_REQUEST', handleApiRequest);
}
