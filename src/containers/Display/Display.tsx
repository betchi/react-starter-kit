import * as React from 'react';
import { CounterState } from '../../actions/counter';
import {RouteComponentProps} from 'react-router';
import { connect } from 'react-redux';
import { ReduxAction, ReduxState } from '../../stores/counter';
import { Dispatch } from 'redux';
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

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>, ownProps: RouteComponentProps<{myParams: string}>) => {
  console.log(ownProps.match.params.myParams);
  return {
    actions: new ActionDispatcher(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);