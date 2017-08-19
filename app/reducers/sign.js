import {AsyncStorage} from 'react-native';

import * as types from '../actions/actionTypes';
import { ACCESS_TOKEN_NAME } from '../common/config';

const initialState = {
  [ACCESS_TOKEN_NAME]: '',
};

export default function sign(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        [ACCESS_TOKEN_NAME]: action.payload.access_token,
      }
    case types.SIGN_IN_FAILED:
      return {
        ...state,
        [ACCESS_TOKEN_NAME]: '',
      }
    default:
      return state;
  }
}
