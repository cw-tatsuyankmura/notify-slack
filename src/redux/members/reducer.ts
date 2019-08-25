import { Reducer } from 'redux';
import { MembersAction } from './actions';
import * as ActionType from '../actionType';
import { TMember } from '../../model';

export type TMembersState = {
  members: TMember[];
  isLoading: boolean;
  error?: null;
};

const initialState: TMembersState = {
  members: [],
  isLoading: false,
};

const reducer: Reducer<TMembersState, MembersAction> = (
  state: TMembersState = initialState,
  action: MembersAction,
) => {
  switch (action.type) {
    // メンバー一覧取得
    case ActionType.GET_MEMBERS_START:
      return {
        ...state,
        members: [],
        isLoading: true,
      };
    case ActionType.GET_MEMBERS_SUCCEED:
      return {
        ...state,
        members: action.payload.result.members,
        isLoading: false,
      };
    case ActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    // メンバー作成
    case ActionType.CREATE_MEMBER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_MEMBER_SUCCEED:
      return {
        ...state,
        members: action.payload.result.members,
        isLoading: false,
      };
    case ActionType.CREATE_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    // メンバー削除
    case ActionType.DELETE_MEMBER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_MEMBER_SUCCEED:
      return {
        ...state,
        members: action.payload.result.members,
        isLoading: false,
      };
    case ActionType.DELETE_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
