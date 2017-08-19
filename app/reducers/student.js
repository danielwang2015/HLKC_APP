import * as types from '../actions/actionTypes';

const initialState = {
  student:'',
};

export default function student(state = initialState, action = {}) {
  switch (action.type) {
    case types.STUDENT_INFO:
      console.log("reducers.......",action.payload);
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
}
