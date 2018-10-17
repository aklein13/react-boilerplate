import { ACTIONS, API_ACTIONS } from '../../actions';
import { AnyAction } from 'redux';

export interface IAuthState {
  isFetching: boolean;
}

const initialState: IAuthState = {
  isFetching: true,
};

export const auth = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.SIMPLE_ACTION:
      return {
        ...state,
        isFetching: false,
      };
    case API_ACTIONS.API_ACTION.successRequest:
      return {
        ...state,
      };
    default:
      return state;
  }
};
