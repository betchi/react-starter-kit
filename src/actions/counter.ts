import { Action } from 'redux';

export enum CounterActionTypes {
  INCREMENT_NAME,
  DECREMENT_NAME,
  FETCH_REQUEST_START_NAME,
  FETCH_REQUEST_FINISH_NAME,
};

export interface IIncrementAction extends Action {
  type: CounterActionTypes;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IIncrementAction => ({
  type: CounterActionTypes.INCREMENT_NAME,
  plusAmount: amount
});

export interface IDecrementAction extends Action {
  type: CounterActionTypes;
  minusAmount: number;
}
export const decrementAmount = (amount: number): IDecrementAction => ({
  type: CounterActionTypes.DECREMENT_NAME,
  minusAmount: amount
});

export interface IFetchRequestStartAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestStart = (): IFetchRequestStartAction => ({
  type: CounterActionTypes.FETCH_REQUEST_START_NAME
});

export interface IFetchRequestFinishAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestFinish = (): IFetchRequestFinishAction => ({
  type: CounterActionTypes.FETCH_REQUEST_FINISH_NAME
});

export type CounterActions = IIncrementAction
  | IDecrementAction
  | IFetchRequestStartAction
  | IFetchRequestFinishAction;
