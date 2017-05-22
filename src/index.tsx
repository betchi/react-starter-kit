import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './containers/counter/counter';
import store from './stores/counter';
import {Provider} from 'react-redux';
import Display from './containers/Display/Display';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/display">Display</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Counter}/>
      <Route path="/display" component={Display}/>
    </div>
  </Router>
  </Provider>
  , document.getElementById('content')
);