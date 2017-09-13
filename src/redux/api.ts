import {IInitialData} from "../models/initialData";
import axios from 'axios';
import {isNull} from "util";

export const startRequest = (initialData: IInitialData, action, attrs={},
                             params = {}, method = 'GET', postData = null) => {
  return (dispatch) => {
    dispatch(StartedCallback(action, attrs, params, postData));
    const urlParams = encodeQueryData(params);
    let requestData: any = {
      method,
      headers: {},
    };
    if (!isNull(postData) && postData.Authorization) {
      requestData.headers['Authorization'] = postData.Authorization;
      delete postData.Authorization;
    }

    let url = `${action.url}?${urlParams}`;
    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        url = url.replace(`{${attr}}`, attrs[attr]);
      }
    }

    if (
      (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'PATCH')
      && postData
    ) {
      requestData.headers['content-type'] = 'application/json';
      requestData.body = JSON.stringify(postData);
    }

    return fetch(url, requestData)
      .then((res: any) => {
        if (res.ok) {
          if (res.status === 204) {
            return dispatch(SuccessCallback(res, action, attrs, params, postData));
          }
          return res.json()
            .then((res: any) => dispatch(SuccessCallback(res, action, attrs, params, postData)));
        } else {
          return res.json()
            .then((res: any) => dispatch(FailureCallback(res, action, attrs, params, postData)));
        }
      })
      .catch((err) => dispatch(FailureCallback(err, action, attrs, params, postData)));
  };
};

/** Action Creators */
export function StartedCallback(action, attrs, params, postData): any {
  return {
    type: action.startRequest,
    attrs,
    params,
    postData,
  };
}

export function SuccessCallback(res: any, action, attrs, params, postData): any {
  return {
    type: action.successRequest,
    res,
    attrs,
    params,
    postData,
  };
}

export function FailureCallback(message: any, action, attrs, params, postData): any {
  return {
    type: action.failureRequest,
    errorMessage: message,
    attrs,
    params,
    postData,
  };
}

/** Utils **/
export const encodeQueryData = (data) => {
  let ret = [];
  for (let d in data) {
    if (data.hasOwnProperty(d)) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
  }
  return ret.join('&');
};
