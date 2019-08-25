import * as ActionType from '../actionType';

export const call = {
  start: (params: string) => ({
    type: ActionType.CALL_START as typeof ActionType.CALL_START,
    payload: { params },
  }),

  succeed: () => ({
    type: ActionType.CALL_SUCCEED as typeof ActionType.CALL_SUCCEED,
  }),

  fail: (error: any) => ({
    type: ActionType.CALL_FAIL as typeof ActionType.CALL_FAIL,
    payload: { error },
    error: true,
  }),
};

export type CallAction =
  | ReturnType<typeof call.start>
  | ReturnType<typeof call.succeed>
  | ReturnType<typeof call.fail>;
