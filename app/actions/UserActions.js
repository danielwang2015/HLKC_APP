import * as types from './actionTypes';

export function loadUserInfo(payload) {
  return {
    type: types.LOAD_STUDENT_INFO,
    payload: payload
  }
}

export function userSignOn(payload) {
  console.log('user sign start');
  return {
    type: types.USER_SIGN_ON,
    payload: payload
  }
}

export function signOnSucceeded(payload) {
  return {
    type: types.SIGN_ON_SUCCEEDED,
    payload: payload
  }
}

export function signOnFailed(payload) {
  return {
    type: types.SIGN_ON_FAILED,
    payload: payload
  }
}