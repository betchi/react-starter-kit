import * as CounterAction from '../actions/counter';

const initialState: CounterAction.CounterState = {
  num: 0,
  loadingCount: 0
};

export default function reducer(state: CounterAction.CounterState = initialState, action: CounterAction.CounterActions): CounterAction.CounterState {
  switch (action.type) {
    case CounterAction.INCREMENT_NAME:
      const incrementAction: CounterAction.IncrementAction = <CounterAction.IncrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num + incrementAction.plusAmount
        }
      );
    case CounterAction.DECREMENT_NAME:
      const decrementAction: CounterAction.DecrementAction = <CounterAction.DecrementAction>action;
      return Object.assign(
        {},
        state,
        {
          num: state.num - decrementAction.minusAmount
        }
      );
    case CounterAction.FETCH_REQUEST_START_NAME: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount + 1
        }
      );
    }
    case CounterAction.FETCH_REQUEST_FINISH_NAME: {
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
