import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './containers/counter/counter';
import { store } from './stores';
import RoomList from './containers/RoomList/RoomList';
import {Provider} from 'react-redux';
import Display from './containers/Display/Display';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/display">Display</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Counter}/>
        <Route path="/display" component={Display}/>
        <Route path="/rooms" component={RoomList}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('content')
);