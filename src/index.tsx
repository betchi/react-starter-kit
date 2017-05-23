import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Counter from './containers/counter/counter';
import { counterStore } from './stores/counter';
import RoomList from './containers/RoomList/RoomList';
import { roomsStore } from './stores/rooms';
import {Provider} from 'react-redux';
import Display from './containers/Display/Display';

ReactDOM.render(
  <Provider store={counterStore}>
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
      <Provider store={roomsStore}>
        <Route path="/rooms" component={RoomList}/>
      </Provider>
    </div>
  </Router>
  </Provider>
  , document.getElementById('content')
);