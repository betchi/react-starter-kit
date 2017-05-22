import { Action } from 'redux';

export enum CounterActionTypes {
  INCREMENT_NAME,
  DECREMENT_NAME,
  FETCH_REQUEST_START_NAME,
  FETCH_REQUEST_FINISH_NAME,
};

export interface IncrementAction extends Action {
  type: CounterActionTypes;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: CounterActionTypes.INCREMENT_NAME,
  plusAmount: amount
});

export interface DecrementAction extends Action {
  type: CounterActionTypes;
  minusAmount: number;
}
export const decrementAmount = (amount: number): DecrementAction => ({
  type: CounterActionTypes.DECREMENT_NAME,
  minusAmount: amount
});

export interface FetchRequestStartAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestStart = (): FetchRequestStartAction => ({
  type: CounterActionTypes.FETCH_REQUEST_START_NAME
});

export interface FetchRequestFinishAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestFinish = (): FetchRequestFinishAction => ({
  type: CounterActionTypes.FETCH_REQUEST_FINISH_NAME
});

export interface CounterState {
  num: number;
  loadingCount: number;
}

export type CounterActions = IncrementAction
  | DecrementAction
  | FetchRequestStartAction
  | FetchRequestFinishAction;
