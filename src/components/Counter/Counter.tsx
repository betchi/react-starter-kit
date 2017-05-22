import * as React from 'react';

interface IProps {
}

interface IState {
  count: number;
}

class Counter extends React.Component<IProps, IState> {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={e => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;