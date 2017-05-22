import * as CounterAction from '../actions/counter';
import counter from '../reducers/counter';
import {createStore, combineReducers, Action} from 'redux';

export default createStore(
  combineReducers({
    counter
  })
);

export type ReduxState = {
  counter: CounterAction.CounterState
};

export type ReduxAction = CounterAction.CounterActions | Action;
