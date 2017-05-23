import { IUser } from 'swagchat-sdk';

export interface IRoomsState {
  user: IUser | null;
  loadingCount: number;
}

export type RoomsState = {
  roomsReducer: IRoomsState
};
