import React, {Component} from 'react';
// import ValidationSample from "./ValidationSample";
// import CreateRef from './CreateRef';
// import ValidationSample2 from "./ValidationSample2";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {
          this.box = ref;
        }}/>
        <button onClick={() => {
          this.box.scrollToBottom();
        }}>go to bottom</button>
      </div>
    )
  }
}

export default App;
