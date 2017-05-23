import { ICounterState } from '../stores/counter';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_FETCH_REQUEST_START,
  COUNTER_FETCH_REQUEST_FINISH,
  CounterActions,
  IIncrementAction,
  IDecrementAction,
} from '../actions/counter';

const initialState: ICounterState = {
  num: 0,
  loadingCount: 0
};

export function counterReducer(state: ICounterState = initialState, action: CounterActions): ICounterState {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return Object.assign(
        {},
        state,
        {
          num: state.num + (<IIncrementAction>action).plusAmount
        }
      );
    case COUNTER_DECREMENT:
      return Object.assign(
        {},
        state,
        {
          num: state.num - (<IDecrementAction>action).minusAmount
        }
      );
    case COUNTER_FETCH_REQUEST_START: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount + 1
        }
      );
    }
    case COUNTER_FETCH_REQUEST_FINISH: {
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
