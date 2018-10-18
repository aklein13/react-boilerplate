import config from '../config/index';

export interface IApiAction {
  action: string;
  url: string;
  startRequest: string;
  successRequest: string;
  failureRequest: string;
}

export const ROOT_URL = config.apiRootUrl;

export const API_ACTIONS: { [key: string]: IApiAction } = {
  API_ACTION: {
    action: 'api_action',
    url: `${ROOT_URL}posts/1/`,
    startRequest: 'api_action/REQUEST_STARTED',
    successRequest: 'api_action/REQUEST_SUCCESS',
    failureRequest: 'api_action/REQUEST_FAILURE',
  },
};

export const ACTIONS = {
  SIMPLE_ACTION: 'simple_action',
};
