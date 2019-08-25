import { push } from 'connected-react-router';
import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import {
  CREATE_MEMBER_SUCCEED,
  DELETE_MEMBER_SUCCEED,
} from '../redux/actionType';

const afterChangedMemberMiddleware: Middleware = ({
  dispatch,
}: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (
    action.type === CREATE_MEMBER_SUCCEED ||
    action.type === DELETE_MEMBER_SUCCEED
  ) {
    dispatch(push('/admin'));
  }
  return next(action);
};

export default afterChangedMemberMiddleware;
