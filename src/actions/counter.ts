import { Action } from 'redux';

export enum CounterActionTypes {
  INCREMENT,
  DECREMENT,
  FETCH_REQUEST_START,
  FETCH_REQUEST_FINISH,
};

export interface IIncrementAction extends Action {
  type: CounterActionTypes;
  plusAmount: number;
}
export const incrementActionCreator = (amount: number): IIncrementAction => ({
  type: CounterActionTypes.INCREMENT,
  plusAmount: amount
});

export interface IDecrementAction extends Action {
  type: CounterActionTypes;
  minusAmount: number;
}
export const decrementActionCreator = (amount: number): IDecrementAction => ({
  type: CounterActionTypes.DECREMENT,
  minusAmount: amount
});

export interface IFetchRequestStartAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestStartActionCreator = (): IFetchRequestStartAction => ({
  type: CounterActionTypes.FETCH_REQUEST_START
});

export interface IFetchRequestFinishAction extends Action {
  type: CounterActionTypes;
}
export const fetchRequestFinishActionCreator = (): IFetchRequestFinishAction => ({
  type: CounterActionTypes.FETCH_REQUEST_FINISH
});

export type CounterActions = IIncrementAction
  | IDecrementAction
  | IFetchRequestStartAction
  | IFetchRequestFinishAction;
