import { API_ACTIONS } from '../../actionTypes';
import { startRequest } from '../../api';

export function apiCall() {
  const action = API_ACTIONS.API_ACTION;
  const postData = {};
  const attrs = {};
  const params = {};
  return startRequest({}, action, attrs, params, 'GET', postData);
}
