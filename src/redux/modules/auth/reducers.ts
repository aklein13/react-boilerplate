import { ACTIONS } from '../../actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  isFetching: false,
};

export const auth = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
