import { call, put, takeLatest } from 'redux-saga/effects';
import * as Action from '../actionType';
import { call as actionCall } from './actions';
import { call as slackCall } from '../../services/slack';

function* runCallSlack(action: ReturnType<typeof actionCall.start>) {
  try {
    yield call(slackCall, action.payload.params);
    yield put(actionCall.succeed());
  } catch (error) {
    yield put(actionCall.fail(error));
  }
}

export function* watchCallSlack() {
  yield takeLatest(Action.CALL_START, runCallSlack);
}
