import * as React from 'react';
import {CounterState} from '../../actions/counter';
import { ReduxState, ReduxAction } from '../../stores/counter';
import { decrementAmount, fetchRequestFinish, fetchRequestStart, incrementAmount } from '../../actions/counter';
import {RouteComponentProps} from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {} from '../actions/counter';

interface IProps extends RouteComponentProps<any> {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<IProps, ReduxState> {
  render(): JSX.Element {
    return (
      <div>
        {(this.props.value.loadingCount === 0) ? null : <p>loading</p>}
        <p>{`score: ${this.props.value.num}`}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
        <button onClick={() => this.props.actions.asyncIncrement()}>async Increment 100</button>
      </div>
    );
  }
}


export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  public increment(amount: number): void {
    this.dispatch(incrementAmount(amount));
  }

  public decrement(amount: number): void {
    this.dispatch(decrementAmount(amount));
  }

  public async asyncIncrement(): Promise<void> {
    this.dispatch(fetchRequestStart());

    try {
      const response: Response = await fetch('/api/count', {
        method: 'GET',
        headers: this.myHeaders
      });

      if (response.status === 200) { //2xx
        const json: {amount: number} = await response.json();
        this.dispatch(incrementAmount(json.amount));
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.dispatch(fetchRequestFinish())
    }
  }
}

const mapStateToProps = (state: ReduxState) => ({
  value: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>, ownProps: RouteComponentProps<{myParams: string}>) => {
  console.log(ownProps.match.params.myParams);
  return {
    actions: new ActionDispatcher(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);