import React, {useState} from 'react';
import Counter from './Counter.js';
import Info from './Info.js';

const App = () => {
  // return <Counter/>/
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>{visible ? 'hide' : 'show'}</button>
      <hr/>
      {visible && <Info/>}
    </div>
  )
}

export default App;
