import React, { Component } from 'react';
import ValidationSample from './ValidationSample'

// 5.1.2 Ex Component Rendering 
// class Component -> use ref

// 5.1.3 must use DOM 
// ------------------------------
// 1. Focus on specific Input   |
// 2. Control Scroll box        |
// 3. Drawing on Canvas Element |
// ------------------------------
// above case, use ref. (Direct access DOM)

// two ways.. to use ref
// 5.2.1 ref setting with callback function
// 5.2.2 ref setting createRef

class App extends Component {
  render() {
    return (
      <ValidationSample/>
    )
  }
}

export default App;
