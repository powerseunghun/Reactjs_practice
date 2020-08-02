import React, { Component } from 'react';
// 9.2 use Sass
import SassComponent from './SassComponent';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SassComponent/>
//       </div>
//     );
//   }
// }

// 9.3 CSS Module
import CSSModule from './CSSModule';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <CSSModule/>
//       </div>
//     )
//   }
// }

// 9.4 styled-components
import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent/>
      </div>
    )
  }
}
export default App;
