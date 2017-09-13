import {API_ACTIONS} from '../../actionTypes';

const initialState: any = {
  isFetching: false,
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case API_ACTIONS.SAMPLE_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
