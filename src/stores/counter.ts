export interface ICounterState {
  num: number;
  loadingCount: number;
}

export type CounterState = {
  counterReducer: ICounterState
};
