import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import counter from '../reducers/counter';
import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';

const middleware: Middleware[] = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default createStore(
  combineReducers({
    counter
  }),
  applyMiddleware(...middleware)
);

export type ReduxState = {
  counter: CounterState
};

export interface CounterState {
  num: number;
  loadingCount: number;
}
