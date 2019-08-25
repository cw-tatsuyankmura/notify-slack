import { Reducer } from 'redux';
import { CallAction } from './actions';
import * as ActionType from '../actionType';

export type TCallState = {
  isCalling: boolean;
};

export const initialState: TCallState = {
  isCalling: false,
};

const reducer: Reducer<TCallState, CallAction> = (
  state: TCallState = initialState,
  action: CallAction,
) => {
  switch (action.type) {
    case ActionType.CALL_START:
      return {
        ...state,
        isCalling: true,
      };
    case ActionType.CALL_SUCCEED:
      return {
        ...state,
        isCalling: false,
      };
    case ActionType.CALL_FAIL:
      return {
        ...state,
        isCalling: false,
        error: action.payload.error,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
