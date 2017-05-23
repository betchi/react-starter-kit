import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RoomsActions } from '../../actions/rooms';
import { State } from '../../stores';
import { IRoomsState } from '../../stores/rooms';
import {
  fetchActionCreator,
  fetchRequestFinishActionCreator,
  fetchRequestStartActionCreator,
} from '../../actions/rooms';
import { IUser } from 'swagchat-sdk';

interface IProps extends RouteComponentProps<any> {
  state: IRoomsState;
  actions: ActionDispatcher;
}

export class RoomList extends React.Component<IProps, State> {
  render(): JSX.Element {
    return (
      <div>
        {(this.props.state.loadingCount === 0) ? null : <p>loading</p>}
        <p>{this.props.state.user ? this.props.state.user.rooms.length : 0}</p>
        <button onClick={() => this.props.actions.asyncFetch()}>async fetch</button>
      </div>
    );
  }
}

class ActionDispatcher {
  constructor(private dispatch: (action: RoomsActions) => void) {}

  myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  public async asyncFetch(): Promise<void> {
    this.dispatch(fetchRequestStartActionCreator());

    try {
      const response: Response = await fetch('http://localhost:9000/v0/users/187868aa-fb05-4212-80b3-84f747132319', {
        method: 'GET',
        headers: this.myHeaders
      });
      if (response.status === 200) {
        const user: IUser = await response.json();
        this.dispatch(fetchActionCreator(user));
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.dispatch(fetchRequestFinishActionCreator());
    }
  }
}

const mapStateToProps = (state: State) => ({
  state: state.roomsReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RoomsActions>, ownProps: RouteComponentProps<{myParams: string}>) => ({
  actions: new ActionDispatcher(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
