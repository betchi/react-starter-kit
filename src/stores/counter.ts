import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import counter from '../reducers/counter';

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

export interface ICounterState {
  num: number;
  loadingCount: number;
}

export type CounterState = {
  counter: ICounterState
};
