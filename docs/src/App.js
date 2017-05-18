import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicExample from './BasicExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello this is React Swoop</h2>
        </div>
        <div>
          Documentation incoming!
        </div>

        <div>
          Basic Example:

          <BasicExample />
        </div>
      </div>
    );
  }
}

export default App;
