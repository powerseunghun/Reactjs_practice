import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = 'react';
  // 1.
  // const style = {
  //   // background-color -> backgroundColor
  //   backgroundColor: "black",
  //   color: "aqua",
  //   fontSize: "48px", // font-size -> fontSize
  //   fontWeight: "bold", // font-weight -> fontWeight
  //   padding: 16
  // }
  // return <div style={style}>{name}</div>

  // 2.
  // return (
  //   <div
  //     style={{
  //       backgroundColor: "black",
  //       color: "aqua",
  //       fontSize: "48px",
  //       fontWeight: "bold",
  //       padding: 16
  //     }}>
  //       {name}
  //     </div>
  // )

  // 3.
  // return <div className="react">{name}</div>

  // 4.
  // return(
  //   <>
  //     <div className="react">{name}</div>
  //     <input/>
  //   </>
  // )

  // 5.
  return (
    <>
      {/*correct */}
      <div className="react" // start tag multi line..
      >
        {name}
      </div>
      // not correct
      /* page rendering */
    </>
  );
}

export default App;
