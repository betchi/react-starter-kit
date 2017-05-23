import { IRoomsState } from '../stores/rooms';
import {
  IFetchAction,
  RoomsActionTypes,
  RoomsActions,
} from '../actions/rooms';

const initialState: IRoomsState = {
  user: null,
  loadingCount: 0
};

export function roomsReducer(state: IRoomsState = initialState, action: RoomsActions): IRoomsState {
  switch (action.type) {
    case RoomsActionTypes.FETCH:
      return Object.assign(
        {},
        state,
        {
          user: (<IFetchAction>action).user,
        }
      );
    case RoomsActionTypes.FETCH_REQUEST_START: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount + 1
        }
      );
    }
    case RoomsActionTypes.FETCH_REQUEST_FINISH: {
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
