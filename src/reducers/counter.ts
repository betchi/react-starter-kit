import * as CounterAction from '../actions/counter';
import { CounterActionTypes } from '../actions/counter';

const initialState: CounterAction.CounterState = {
  num: 0,
  loadingCount: 0
};

export default function reducer(state: CounterAction.CounterState = initialState, action: CounterAction.CounterActions): CounterAction.CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_NAME:
      const incrementAction: CounterAction.IncrementAction = <CounterAction.IncrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num + incrementAction.plusAmount
        }
      );
    case CounterActionTypes.DECREMENT_NAME:
      const decrementAction: CounterAction.DecrementAction = <CounterAction.DecrementAction>action;
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
