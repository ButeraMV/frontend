import React, { Component } from 'react';

//includes
import './App.css';

//components
import ActionButton from './components/ActionButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionButton text='test' />
      </div>
    );
  }
}

export default App;
