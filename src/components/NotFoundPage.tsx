import * as React from 'react';
import {RouteComponentProps} from 'react-router';

interface IProps extends RouteComponentProps<any> {
}

export default class NotFoundPage extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        Not Found
      </div>
    );
  }
}