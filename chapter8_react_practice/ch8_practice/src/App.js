import React, {useState} from 'react';
import Counter from './Counter.js';
import Info from './Info.js';
import Counter_Reducer from './Counter_Reducer';

const App = () => {
  // return <Counter/>

  // const [visible, setVisible] = useState(false);

  // return (
  //   <div>
  //     <button onClick={() => {
  //       setVisible(!visible);
  //     }}>{visible ? 'hide' : 'show'}</button>
  //     <hr/>
  //     {visible && <Info/>}
  //   </div>
  // )

  return <Counter_Reducer/>
}

export default App;
