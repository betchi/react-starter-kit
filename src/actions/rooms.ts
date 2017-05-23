import { Action } from 'redux';
import { IUser } from 'swagchat-sdk';

export const ROOMS_FETCH = 'ROOMS_FETCH';
export const ROOMS_FETCH_REQUEST_START = 'ROOMS_FETCH_REQUEST_START';
export const ROOMS_FETCH_REQUEST_FINISH = 'ROOMS_FETCH_REQUEST_FINISH';
type RoomsActionTypes = typeof ROOMS_FETCH
  | typeof ROOMS_FETCH_REQUEST_START
  | typeof ROOMS_FETCH_REQUEST_FINISH;

export interface IRoomsFetchAction extends Action {
  type: RoomsActionTypes;
  user: IUser;
}
export const fetchActionCreator = (user: IUser): IRoomsFetchAction => {
  console.log('action fetch');
  console.log(user);

  return {
    type: ROOMS_FETCH,
    user: user,
  };
};

export interface IFetchRequestStartAction extends Action {
  type: RoomsActionTypes;
}
export const fetchRequestStartActionCreator = (): IFetchRequestStartAction => ({
  type: ROOMS_FETCH_REQUEST_START
});

export interface IFetchRequestFinishAction extends Action {
  type: RoomsActionTypes;
}
export const fetchRequestFinishActionCreator = (): IFetchRequestFinishAction => ({
  type: ROOMS_FETCH_REQUEST_FINISH
});

export type RoomsActions = IRoomsFetchAction
  | IFetchRequestStartAction
  | IFetchRequestFinishAction;
