import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CounterActions } from '../../actions/counter';
import { ICounterState } from '../../stores/counter';
import { State } from '../../stores';
import {
  decrementActionCreator,
  fetchRequestFinishActionCreator,
  fetchRequestStartActionCreator,
  incrementActionCreator
} from '../../actions/counter';
import {} from '../actions/counter';

interface IProps extends RouteComponentProps<any> {
  state: ICounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<IProps, State> {
  render(): JSX.Element {
    return (
      <div>
        {(this.props.state.loadingCount === 0) ? null : <p>loading</p>}
        <p>{`score: ${this.props.state.num}`}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
        <button onClick={() => this.props.actions.asyncIncrement()}>async Increment 100</button>
      </div>
    );
  }
}

export class ActionDispatcher {
  constructor(private dispatch: (action: CounterActions) => void) {}

  myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  public increment(amount: number): void {
    this.dispatch(incrementActionCreator(amount));
  }

  public decrement(amount: number): void {
    this.dispatch(decrementActionCreator(amount));
  }

  public async asyncIncrement(): Promise<void> {
    this.dispatch(fetchRequestStartActionCreator());

    try {
      const response: Response = await fetch('/api/count', {
        method: 'GET',
        headers: this.myHeaders
      });

      if (response.status === 200) { //2xx
        const json: {amount: number} = await response.json();
        this.dispatch(incrementActionCreator(json.amount));
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.dispatch(fetchRequestFinishActionCreator())
    }
  }
}

const mapStateToProps = (state: State) => ({
  state: state.counterReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterActions>, ownProps: RouteComponentProps<{myParams: string}>) => {
  console.log(ownProps.match.params.myParams);
  return {
    actions: new ActionDispatcher(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
