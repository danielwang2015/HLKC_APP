import * as types from './actionTypes';

export function signInRequest(payload) {
  return {
    type: types.SIGN_IN_API_REQUEST,
    payload: payload
  }
}

export function signInSucceeded(payload) {
  return {
    type: types.SIGN_IN_SUCCEEDED,
    payload: payload
  }
}

export function signInFailed(payload) {
  return {
    type: types.SIGN_IN_FAILED,
    payload: payload
  }
}

export function refreshJwtToken() {
  return {
    type: types.REFRESH_JWT_TOKEN
  }
}

export function authSucceeded(payload) {
  return {
    type: types.AUTH_SUCCEEDED,
    payload: payload
  }
}


