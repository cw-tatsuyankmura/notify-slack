import { TMember } from '../../model';
import * as ActionType from '../actionType';

type TGetMembersResult = {
  members: TMember[];
};

type TSubmitMembersResult = {
  members: TMember[];
};

type TDeleteMembersResult = {
  members: TMember[];
};

export const getMembers = {
  start: () => ({
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
  }),

  succeed: (result: TGetMembersResult) => ({
    type: ActionType.GET_MEMBERS_SUCCEED as typeof ActionType.GET_MEMBERS_SUCCEED,
    payload: { result },
  }),

  fail: (error: any) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { error },
    error: true,
  }),
};

export const submitMember = {
  start: (params: TMember) => ({
    type: ActionType.CREATE_MEMBER_START as typeof ActionType.CREATE_MEMBER_START,
    payload: { params },
  }),

  succeed: (result: TSubmitMembersResult) => ({
    type: ActionType.CREATE_MEMBER_SUCCEED as typeof ActionType.CREATE_MEMBER_SUCCEED,
    payload: { result },
  }),

  fail: (error: any) => ({
    type: ActionType.CREATE_MEMBER_FAIL as typeof ActionType.CREATE_MEMBER_FAIL,
    payload: { error },
    error: true,
  }),
};

export const deleteMember = {
  start: (params: string) => ({
    type: ActionType.DELETE_MEMBER_START as typeof ActionType.DELETE_MEMBER_START,
    payload: { params },
  }),

  succeed: (result: TDeleteMembersResult) => {
    return {
      type: ActionType.DELETE_MEMBER_SUCCEED as typeof ActionType.DELETE_MEMBER_SUCCEED,
      payload: { result },
    };
  },

  fail: (error: any) => ({
    type: ActionType.DELETE_MEMBER_FAIL as typeof ActionType.DELETE_MEMBER_FAIL,
    payload: { error },
    error: true,
  }),
};

export type MembersAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>
  | ReturnType<typeof submitMember.start>
  | ReturnType<typeof submitMember.succeed>
  | ReturnType<typeof submitMember.fail>
  | ReturnType<typeof deleteMember.start>
  | ReturnType<typeof deleteMember.succeed>
  | ReturnType<typeof deleteMember.fail>;
