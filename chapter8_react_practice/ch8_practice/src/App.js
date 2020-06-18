import React, {useState} from 'react';
import Counter from './Counter.js';
import Info from './Info.js';
import Counter_Reducer from './Counter_Reducer';
import Info_Reducer from './Info_Reducer';
import Average from './Average.js';
import Average_Memo from './Average_Memo.js';
import Average_Ref from './Average_Ref.js';
import RefSample from './RefSample.js';
import Info_Custom_Hook from './Info_Custom_Hook.js';

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

  // return <Counter_Reducer/>

  // return <Info_Reducer/>

  // return <Average/>
  // return <Average_Memo/>;

  // return <Average_Ref/>
  // return <RefSample/>
  return <Info_Custom_Hook/>
}

export default App;
