import { push } from 'connected-react-router';
import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { CALL_SUCCEED } from '../redux/actionType';

const afterCalledMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch,
) => (action: any) => {
  if (action.type === CALL_SUCCEED) {
    dispatch(push('/complete'));
  }
  return next(action);
};

export default afterCalledMiddleware;
