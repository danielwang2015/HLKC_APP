import * as types from '../actions/actionTypes';

const initialState = {
  user: '',
};

export default function AppUser(state = initialState, action = {}) {
  switch (action.type) {
    case types.AppUser_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case types.USER_SIGN_ON:
      console.log("User reducers......." + action.payload);  
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
