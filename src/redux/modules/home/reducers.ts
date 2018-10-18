import { ACTIONS, API_ACTIONS } from '../../actionTypes';
import { AnyAction } from 'redux';

export interface IHomeState {
  isFetching: boolean;
  sampleValue: null | string;
}

const initialState: IHomeState = {
  isFetching: false,
  sampleValue: null,
};

export const home = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.SIMPLE_ACTION:
      return {
        ...state,
        sampleValue: action.payload,
      };
    case API_ACTIONS.API_ACTION.startRequest:
      return {
        ...state,
        isFetching: true,
      };
    case API_ACTIONS.API_ACTION.successRequest:
      return {
        ...state,
        sampleValue: action.res.title,
        isFetching: false,
      };
    case API_ACTIONS.API_ACTION.failureRequest:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
