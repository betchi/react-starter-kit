import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './counter/Container';
import store from './stores/CounterStore';
import {Provider} from 'react-redux';
// import createBrowserHistory from 'history/createBrowserHistory';
// import NotFound from './pages/NotFound';
import Display from './components/Display/Display';

// const history = createBrowserHistory();

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