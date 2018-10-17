import { ACTIONS, API_ACTIONS } from '../../actionTypes';
import { startRequest } from '../../api';

export function apiCall() {
  const action = API_ACTIONS.API_ACTION;
  const postData = {};
  const attrs = {};
  const params = {};
  return startRequest({}, action, attrs, params, 'GET', postData);
}

export function simpleAction() {
  return {
    type: ACTIONS.SIMPLE_ACTION,
    payload: 'test',
  };
}
