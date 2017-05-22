import { CounterState } from '../stores/counter';
import {
  CounterActionTypes,
  CounterActions,
  IncrementAction,
  DecrementAction,
} from '../actions/counter';

const initialState: CounterState = {
  num: 0,
  loadingCount: 0
};

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_NAME:
      const incrementAction: IncrementAction = <IncrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num + incrementAction.plusAmount
        }
      );
    case CounterActionTypes.DECREMENT_NAME:
      const decrementAction: DecrementAction = <DecrementAction>action;
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
