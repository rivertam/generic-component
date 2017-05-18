import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import logo from './logo.svg';
import './App.css';
import BasicExample from './BasicExample';
import BasicExampleText from '!raw!./BasicExample.js';

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

          <SyntaxHighlighter language="javascript" style={docco}>
            {BasicExampleText}
          </SyntaxHighlighter>
          <BasicExample />
        </div>
      </div>
    );
  }
}

export default App;
