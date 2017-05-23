import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CounterActions } from '../../actions/counter';
import { ICounterState } from '../../stores/counter';
import { State } from '../../stores';
import { ActionDispatcher } from '../../containers/counter/counter';

interface IProps extends RouteComponentProps<any> {
  state: ICounterState;
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
        <p className="display-count">{`score: ${this.props.state.num}`}</p>
      </div>
    );
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
)(Display);
