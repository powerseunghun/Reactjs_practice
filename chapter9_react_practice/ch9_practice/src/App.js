import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SassComponent from './SassComponent.js';
import CSSModule from './CSSModule';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <img src={logo} className="logo" alt="logo"/>
//           <p>
//             Edit <code>src/App.js</code> and Save to reload.
//           </p>
//           <a
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent/>
//       </div>
//     )
//   }
// }
class App extends Component {
  render() {
    return (
      <div>
        <CSSModule/>
      </div>
    );
  }
}

export default App;
