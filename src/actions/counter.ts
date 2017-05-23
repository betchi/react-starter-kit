import { Action } from 'redux';

// Action Types
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_FETCH_REQUEST_START = 'FETCH_REQUEST_START';
export const COUNTER_FETCH_REQUEST_FINISH = 'COUNTER_FETCH_REQUEST_FINISH';
type CounterActionTypes = typeof COUNTER_INCREMENT
  | typeof COUNTER_DECREMENT
  | typeof COUNTER_FETCH_REQUEST_START
  | typeof COUNTER_FETCH_REQUEST_FINISH;

// Actions
export interface IIncrementAction extends Action {
  type: CounterActionTypes;
  plusAmount: number;
}
export const incrementActionCreator = (amount: number): IIncrementAction => ({
  type: COUNTER_INCREMENT,
  plusAmount: amount
});

export interface IDecrementAction extends Action {
  type: CounterActionTypes;
  minusAmount: number;
}
export const decrementActionCreator = (amount: number): IDecrementAction => ({
  type: COUNTER_DECREMENT,
  minusAmount: amount
});

export interface IFetchRequestStartAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestStartActionCreator = (): IFetchRequestStartAction => ({
  type: COUNTER_FETCH_REQUEST_START
});

export interface IFetchRequestFinishAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestFinishActionCreator = (): IFetchRequestFinishAction => ({
  type: COUNTER_FETCH_REQUEST_FINISH
});

export type CounterActions = IIncrementAction
  | IDecrementAction
  | IFetchRequestStartAction
  | IFetchRequestFinishAction;
