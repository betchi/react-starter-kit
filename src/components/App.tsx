import * as React from 'react';

export interface IAppProps {
}

class App extends React.Component<IAppProps, void> {
  render(): JSX.Element {
    return (
      <div>
        Hello SSR!!!
      </div>
    );
  }
}

export default App;