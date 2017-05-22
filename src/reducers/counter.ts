import { ICounterState } from '../stores/counter';
import {
  CounterActionTypes,
  CounterActions,
  IIncrementAction,
  IDecrementAction,
} from '../actions/counter';

const initialState: ICounterState = {
  num: 0,
  loadingCount: 0
};

export default function reducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_NAME:
      const incrementAction: IIncrementAction = <IIncrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num + incrementAction.plusAmount
        }
      );
    case CounterActionTypes.DECREMENT_NAME:
      const decrementAction: IDecrementAction = <IDecrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num - decrementAction.minusAmount
        }
      );
    case CounterActionTypes.FETCH_REQUEST_START_NAME: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount + 1
        }
      );
    }
    case CounterActionTypes.FETCH_REQUEST_FINISH_NAME: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount - 1
        }
      );
    }
    default:
      return state;
  }
}
