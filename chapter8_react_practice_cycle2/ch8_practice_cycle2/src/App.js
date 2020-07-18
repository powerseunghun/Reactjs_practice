import React, { useState } from 'react';
import Counter_Reducer from './Counter_Reducer';
import Info_Reducer from './Info_Reducer';
import Average from './Average';

// 8.2 useEffect
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={() => {
//         setVisible(!visible);
//       }}>{visible ? '숨기기' : '보이기'}</button>
//       <hr/>
//       {visible && <Info/>}
//     </div>
//   )
// }

// 8.3 useReducer
// const App = () => {
//   return (
//     <Counter_Reducer/>
//   )
// }

// 8.3.2 input state management
// const App = () => {
//   return <Info_Reducer/>
// }

// 8.4 useMemo
const App = () => {
  return <Average/>
}

export default App;
