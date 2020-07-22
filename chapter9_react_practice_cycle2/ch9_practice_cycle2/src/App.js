import React, { Component } from 'react';
import logo from './logo.svg';
import SassComponent from './SassComponent';
// 9.1.1 naming rule (App.css)
// similar -> BEM Naming
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent/>
      </div>
    )
  }
}

export default App;
