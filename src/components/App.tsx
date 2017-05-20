import * as React from 'react';

interface Props {
}

class App extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <div>
        Hello SSR!!!
      </div>
    );
  }
}

export default App;