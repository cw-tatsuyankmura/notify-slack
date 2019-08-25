import { all, fork } from 'redux-saga/effects';
import { watchGetMembers } from './members/saga';
import { watchCallSlack } from './call/saga';

export default function* rootSaga() {
  yield all([fork(watchGetMembers), fork(watchCallSlack)]);
}
