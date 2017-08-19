import {fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './counter';
import {watchApiRequest} from './apiTester';
import {watchRefreshJwtToken} from './token';
import {watchSignInRequest} from './signApi';
import {watchGetAdvertisementListRequest, watchGetAdvertisementBYIDRequest} from './advertisement';
import {watchLoadStudentInfo} from './student';
import {watchLoadAppUserInfo} from './AppUser';

export default function* rootSaga() {
  yield [
    fork(watchIncrementAsync),
    fork(watchApiRequest),
    fork(watchRefreshJwtToken),
    fork(watchSignInRequest),
    fork(watchGetAdvertisementListRequest),
    fork(watchLoadStudentInfo),
    fork(watchLoadAppUserInfo),
    fork(watchGetAdvertisementBYIDRequest),
  ]
}
