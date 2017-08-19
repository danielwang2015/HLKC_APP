import * as types from './actionTypes';

export function getAdvertisementList(payload) {
  return {
    type: types.GET_ADVERTISEMENT_LIST,
    payload: payload
  }
}

export function setAdvertisementList(payload) {
  return {
    type: types.SET_ADVERTISEMENT_LIST,
    payload: payload
  }
}

export function getAdvertisementBYID(payload) {
  
  return {
    type: types.GET_ADVERTISEMENT_BYID,
    payload: payload
  }
}
