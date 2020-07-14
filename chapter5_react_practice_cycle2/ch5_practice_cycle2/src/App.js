import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

// 5.1.2 Ex Component Rendering 
// class Component -> use ref

// 5.1.3 must use DOM 
// --------------------------------
// | 1. Focus on specific Input   |
// | 2. Control Scroll box        |
// | 3. Drawing on Canvas Element |
// --------------------------------
// above case, use ref. (Direct access DOM)

// two ways.. to use ref
// 5.2.1 ref setting with callback function
// 5.2.2 ref setting createRef
// class App extends Component {
//   render() {
//     return (
//       <ValidationSample/>
//     )
//   }
// }

// 5.3.2.2 ScrollBox Component Rendering
class App extends Component {
  render() {
    return (
      <div>
        
        {/* 5.3.4 ref attach to component. use inner method*/}
        <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          go to bottom
        </button>
      </div>
    )
  }
}

export default App;
