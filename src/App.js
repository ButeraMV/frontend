import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//includes
import './App.css';

//components
import ActionButton from './components/ActionButton';
import Splash from './components/splash/Splash.js';
import RatingsPage from './components/ratings-page/RatingsPage.js';

class App extends Component {
  render() {
    return   (
      <Router>
      <div className="App">

        <Route exact path='/' component={Splash} />
        <Route exact path='/ratings' component={RatingsPage} />

      </div>
      </Router>
    );
  }
}

export default App;
