import * as apiTesterActions from './apiTesterActions';
import * as counterActions from './counterActions';
import * as authActions from './authActions';
import * as userActions from './UserActions';
import * as advertisementActions from './advertisementActions';
import * as studentActions from './studentActions';

const actions = {
  ...apiTesterActions,
  ...counterActions,
  ...authActions,
  ...userActions,
  ...advertisementActions,
  ...studentActions,
};

export { actions };
