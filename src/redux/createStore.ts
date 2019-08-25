import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import * as reducers from './rootReducer';
import rootSaga from './rootSaga';
import { TMembersState } from './members/reducer';
import { TCallState } from './call/reducer';
import afterChangedMemberAction from '../middlewares/afterChangedMemberMiddleware';
import afterCalledAction from '../middlewares/afterCalledMiddleware';

export type TInitialState = {
  call: TCallState;
  members: TMembersState;
  router: RouterState;
};

const sagaMiddleware = createSagaMiddleware();

export default function createStore(history: History) {
  const store = reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      sagaMiddleware,
      afterCalledAction,
      afterChangedMemberAction,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
