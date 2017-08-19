import { LOCAL_ACCESS_TOKEN_NAME } from '../common/config';
import { getAccessToken } from '../common/token';

export default function authMiddleware() {
  return store => next => async action => {
    const token = await getAccessToken();
    const { payload } = action;
    innerPayload = { ...payload, [LOCAL_ACCESS_TOKEN_NAME]: token}
    let innerAction = {
      ...action,
      payload: innerPayload
    }
    return next(innerAction);
  }
}
