import { Action } from 'redux';

export const INCREMENT_NAME = 'counter/increment';
export type INCREMENT_TYPE = typeof INCREMENT_NAME;
export const DECREMENT_NAME = 'counter/decrement';
export type DECREMENT_TYPE = typeof DECREMENT_NAME;
export const FETCH_REQUEST_START_NAME = 'counter/fetch_request_start';
export type FETCH_REQUEST_START_TYPE = typeof FETCH_REQUEST_START_NAME;
export const FETCH_REQUEST_FINISH_NAME = 'counter/fetch_request_finish';
export type FETCH_REQUEST_FINISH_TYPE = typeof FETCH_REQUEST_FINISH_NAME;

export interface IncrementAction extends Action {
  type: INCREMENT_TYPE;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: INCREMENT_NAME,
  plusAmount: amount
});

export interface DecrementAction extends Action {
  type: DECREMENT_TYPE;
  minusAmount: number;
}
export const decrementAmount = (amount: number): DecrementAction => ({
  type: DECREMENT_NAME,
  minusAmount: amount
});

export interface FetchRequestStartAction extends Action {
  type: FETCH_REQUEST_START_TYPE;
}
export const fetchRequestStart = (): FetchRequestStartAction => ({
  type: FETCH_REQUEST_START_NAME
});

export interface FetchRequestFinishAction extends Action {
  type: FETCH_REQUEST_FINISH_TYPE;
}
export const fetchRequestFinish = (): FetchRequestFinishAction => ({
  type: FETCH_REQUEST_FINISH_NAME
});

export interface CounterState {
  num: number;
  loadingCount: number;
}

export type CounterActions = IncrementAction
  | DecrementAction
  | FetchRequestStartAction
  | FetchRequestFinishAction;
