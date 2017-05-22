import * as React from 'react';

interface IProps {
}

interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return (
      <div>
        <ul className="app-side">
          <li>00001</li>
          <li>00002</li>
        </ul>
        <div>
          <p>content</p>
        </div>
      </div>
    );
  }
}

export default App;