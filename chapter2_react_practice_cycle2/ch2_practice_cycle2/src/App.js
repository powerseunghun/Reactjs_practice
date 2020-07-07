import React, { Fragment } from 'react';

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
  const name = 'react';
  return (
    <Fragment>
      {name === 'react' ? (
        <h1>it is react.</h1>
      ) : 
      (
        <h2>it is not react.</h2>
      )}
    </Fragment>
  )
}
export default App;
