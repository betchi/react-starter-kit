import { Action } from 'redux';
import { IUser } from 'swagchat-sdk';

export enum RoomsActionTypes {
  FETCH,
  FETCH_REQUEST_START,
  FETCH_REQUEST_FINISH,
};

export interface IFetchAction extends Action {
  type: RoomsActionTypes;
  user: IUser;
}
// export const fetchActionCreator = (user: IUser): IFetchAction => ({
//   type: RoomsActionTypes.FETCH,
//   user: user
// });
export const fetchActionCreator = (user: IUser): IFetchAction => {
  console.log('action fetch');
  console.log(user);

  return {
    type: RoomsActionTypes.FETCH,
    user: user,
  };
};

export interface IFetchRequestStartAction extends Action {
  type: RoomsActionTypes;
}
export const fetchRequestStartActionCreator = (): IFetchRequestStartAction => ({
  type: RoomsActionTypes.FETCH_REQUEST_START
});

export interface IFetchRequestFinishAction extends Action {
  type: RoomsActionTypes;
}
export const fetchRequestFinishActionCreator = (): IFetchRequestFinishAction => ({
  type: RoomsActionTypes.FETCH_REQUEST_FINISH
});

export type RoomsActions = IFetchAction
  | IFetchRequestStartAction
  | IFetchRequestFinishAction;
