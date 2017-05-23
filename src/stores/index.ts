import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { IUser } from 'swagchat-sdk';

import { counterReducer } from '../reducers/counter';
import { roomsReducer } from '../reducers/rooms';
import { ICounterState } from './counter';
import { IRoomsState } from './rooms';

const middleware: Middleware[] = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  combineReducers({
    counterReducer,
    roomsReducer,
  }),
  applyMiddleware(...middleware)
);

export interface IState {
  num: number;
  loadingCount: number;
  user: IUser | null;
}

export type State = {
  counterReducer: ICounterState,
  roomsReducer: IRoomsState,
};
