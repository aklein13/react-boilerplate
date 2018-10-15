import { IApiAction } from './actionTypes';
import { Dispatch } from 'react-redux';
import { AnyAction } from 'redux';

interface IRequestData {
  method: string;
  headers: {};
  body?: string;
}

export const startRequest = (
  initialData: {},
  action: IApiAction,
  attrs: {} = {},
  params: {} = {},
  method: string = 'GET',
  postData: any = null
) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(StartedCallback(action, attrs, params, postData));
    const urlParams = encodeQueryData(params);
    method = method.toUpperCase();
    const requestData: IRequestData = {
      method,
      headers: {},
    };

    let url = `${action.url}?${urlParams}`;
    for (const attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        url = url.replace(`{${attr}}`, attrs[attr]);
      }
    }
    if (
      (method === 'POST' || method === 'PUT' || method === 'PATCH') &&
      postData
    ) {
      requestData.headers['content-type'] = 'application/json';
      requestData.body = JSON.stringify(postData);
    }

    return fetch(url, requestData)
      .then((res: any) => {
        if (res.ok) {
          if (res.status === 204) {
            return dispatch(
              SuccessCallback(res, action, attrs, params, postData)
            );
          }
          return res
            .json()
            .then((result: any) =>
              dispatch(SuccessCallback(result, action, attrs, params, postData))
            );
        } else {
          return res
            .json()
            .then((result: any) =>
              dispatch(FailureCallback(result, action, attrs, params, postData))
            );
        }
      })
      .catch((err: any) =>
        dispatch(FailureCallback(err, action, attrs, params, postData))
      );
  };
};

/** Action Creators */
export function StartedCallback(
  action: IApiAction,
  attrs: {},
  params: {},
  postData: {} | null
) {
  return {
    type: action.startRequest,
    attrs,
    params,
    postData,
  };
}

export function SuccessCallback(
  res: {},
  action: IApiAction,
  attrs: {},
  params: {},
  postData: {} | null
) {
  return {
    type: action.successRequest,
    res,
    attrs,
    params,
    postData,
  };
}

export function FailureCallback(
  message: string,
  action: IApiAction,
  attrs: {},
  params: {},
  postData: {} | null
) {
  return {
    type: action.failureRequest,
    errorMessage: message,
    attrs,
    params,
    postData,
  };
}

export const encodeQueryData = (data: {}) => {
  const ret = [];
  for (const d in data) {
    if (data.hasOwnProperty(d)) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
  }
  return ret.join('&');
};
