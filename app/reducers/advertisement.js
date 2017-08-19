import * as types from '../actions/actionTypes';

const initialState = {
  advList: []
};

export default function advertisement(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_ADVERTISEMENT_LIST:
      return {
        ...state,
        advList: action.payload.advertisement
      };
    case types.SET_ADVERTISEMENT_BYID:
      return {
        ...state,
        advList: action.payload.advertisement
      };
    default:
      return state;
  }
}
