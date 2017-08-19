import * as types from './actionTypes';

export function loadStudentInfo(payload) {
  return {
    type: types.LOAD_STUDENT_INFO,
    payload: payload
  }
}