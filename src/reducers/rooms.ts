import { IRoomsState } from '../stores/rooms';
import {
  IRoomsFetchAction,
  ROOMS_FETCH,
  ROOMS_FETCH_REQUEST_START,
  ROOMS_FETCH_REQUEST_FINISH,
  RoomsActions,
} from '../actions/rooms';

const initialState: IRoomsState = {
  user: null,
  loadingCount: 0
};

export function roomsReducer(state: IRoomsState = initialState, action: RoomsActions): IRoomsState {
  switch (action.type) {
    case ROOMS_FETCH:
      return Object.assign(
        {},
        state,
        {
          user: (<IRoomsFetchAction>action).user,
        }
      );
    case ROOMS_FETCH_REQUEST_START: {
      return Object.assign(
        {},
        state,
        {
          loadingCount: state.loadingCount + 1
        }
      );
    }
    case ROOMS_FETCH_REQUEST_FINISH: {
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
