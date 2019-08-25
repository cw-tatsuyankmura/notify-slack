import { call, put, takeLatest } from 'redux-saga/effects';
import * as Action from '../actionType';
import { getMembers, submitMember, deleteMember } from './actions';
import {
  getMembers as getMembersRequest,
  submitMember as submitMembersRequest,
  deleteMember as deleteMembersRequest,
} from '../../services/request';

function* runGetMembers() {
  try {
    const members = yield call(getMembersRequest);
    yield put(getMembers.succeed({ members }));
  } catch (error) {
    yield put(getMembers.fail(error));
  }
}

function* runSubmitMember(action: ReturnType<typeof submitMember.start>) {
  try {
    yield call(submitMembersRequest, action.payload.params);
    const members = yield call(getMembersRequest);
    yield put(submitMember.succeed({ members }));
  } catch (error) {
    yield put(submitMember.fail(error));
  }
}

function* runDeleteMember(action: ReturnType<typeof deleteMember.start>) {
  try {
    yield call(deleteMembersRequest, action.payload.params);
    const members = yield call(getMembersRequest);
    yield put(deleteMember.succeed({ members }));
  } catch (error) {
    yield put(deleteMember.fail(error));
  }
}

export function* watchGetMembers() {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);
  yield takeLatest(Action.CREATE_MEMBER_START, runSubmitMember);
  yield takeLatest(Action.DELETE_MEMBER_START, runDeleteMember);
}
