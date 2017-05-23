import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { roomsReducer } from '../reducers/rooms';
import { IUser } from 'swagchat-sdk';

const middleware: Middleware[] = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const roomsStore = createStore(
  combineReducers({
    roomsReducer
  }),
  applyMiddleware(...middleware)
);

export interface IRoomsState {
  user: IUser | null;
  loadingCount: number;
}

export type RoomsState = {
  roomsReducer: IRoomsState
};
