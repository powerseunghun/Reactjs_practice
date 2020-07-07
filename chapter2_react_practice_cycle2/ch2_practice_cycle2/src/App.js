import React, { Fragment } from 'react';
import './App.css';

// 1..
// function App() {
//   const name = 'react';
//   return (
//     //<Fragment>
//     <>
//       <h1>{name}</h1>
//     </>
    
//   );
// }
// // var's scope = function
// function myFunction() {
//   var a = "hello";
//   if (true) {
//     var a = "bye";
//     console.log(a); // bye
//   }
//   console.log(a); // bye
// }

// // var's substitution let, const
// // let, const's scope = block
// function myFunction() {
//   let a = 1;
//   if(true) {
//     a = 2; // let, const = duplication declaration (x)
//     console.log(a); // 2
//   }
//   console.log(a); // 1
// }

// 2..
function App() {
  // 2.4.3 trinomial operator
  // const name = 'react';
  // return (
  //   <Fragment>
  //     {name === 'react' ? (
  //       <h1>it is react.</h1>
  //     ) : 
  //     (
  //       <h2>it is not react.</h2>
  //     )}
  //   </Fragment>
  // )

  // 2.4.4 using AND operator conditional rendering
  // const name = 'react';
  // return (
  //   <div>
  //     {/* {name === 'react' ? <h1>React</h1> : null} */}
  //     {name === 'react' && <h1>React..</h1>}
  //   </div>
  // )

  // // 2.4.5 don't undefined rendering
  // const name = undefined;
  // // return name; --> error.. using OR operator
  // return name || 'value is undefined';
  
  // // but in JSX, undefined redering fine
  // const name = undefined;
  // // return <div>{name}</div>
  // // if you want show text, when value is undefined
  // return <div>{name || 'this is react'}</div>
  
  // 2.4.6 inline styling
  // const name = 'react';
  // const style = {
  //   // disappear '-' -> camel..
  //   // background-color -> backgroundColor
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',     // font-size -> fontSize
  //   fontWeight: 'bold',   // font-weight -> fontWeight
  //   padding: 16 // omission unit.. default px
  // }
  // return <div style={style}>React</div>

  // if you don't want already declaration style..
  // const name = 'react!';
  // return (
  //   <div
  //     style={{
  //       backgroundColor: 'black',
  //       color: 'aqua',
  //       fontSize: '48px',
  //       fontWeight: 'bold',
  //       padding: 16
  //     }}>
  //       {name}
  //   </div>
  // )

  // 2.4.7 className instead of class
  // in JSX <div className=""> instead of <div class="">
  // const name='react..!';
  // return (
  //   <div className="react">
  //     {name}
  //   </div>
  // )

  // 2.4.7 must closing tag
  // in HTML, if <br>, <input> tag don't close, but working well
  // but JSX not working error occur
  const name='react';
  return (
    <>
      <div className="react">
        {name}
        {/* <input> error */}
        
        {/* <input></input> */}
        {/* <input/>self-closing */}
      </div>
    </>
  )
}
export default App;
