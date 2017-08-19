import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import { API_HOST } from '../common/config';

export function* handleGetAdvertisementListRequest(action) {
  try {
    const { local_access_token } = action.payload;

    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/News`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      },
    };

    const response = yield call(axios, apiConfig);
    yield put({type: types.SET_ADVERTISEMENT_LIST, payload: { advertisement: response.data }});
  } catch (e) {
    console.log(e);
  }
}

export function* handleGetAdvertisementBYIDRequest(action) {
  try {
    const { local_access_token } = action.payload;
    console.log("get news by id");
    const apiConfig = {
      method: 'get',
      url: `${API_HOST}/api/News`,
      headers: {
        Authorization: `Bearer ${local_access_token}`
      }
    }

    const response = yield call(axios, apiConfig);
    yield put({type: types.SET_ADVERTISEMENT_LIST, payload: { advertisement: response.data }});
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetAdvertisementListRequest() {
  yield takeEvery(types.GET_ADVERTISEMENT_LIST, handleGetAdvertisementListRequest);
}

export function* watchGetAdvertisementBYIDRequest() {
  yield takeEvery(types.GET_ADVERTISEMENT_BYID, handleGetAdvertisementBYIDRequest);
}