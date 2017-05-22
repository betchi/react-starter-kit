import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CounterState, CounterActions } from '../../actions/counter';
import { ReduxState } from '../../stores/counter';
import { ActionDispatcher } from '../../containers/counter/counter';

interface IProps extends RouteComponentProps<any> {
  value: CounterState;
  actions: ActionDispatcher;
}

interface IState {
}

class Display extends React.Component<IProps, IState> {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return (
      <div>
        <p className="display-count">{`score: ${this.props.value.num}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  value: state.counter
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
)(Display);