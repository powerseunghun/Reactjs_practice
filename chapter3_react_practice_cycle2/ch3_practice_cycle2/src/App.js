import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

// 3.1 Class Component
// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>
//   }
// }

// 3.2.3.2 module import
// const App = () => {
//   return <MyComponent/>
// }

// 3.3.2 when use Component.. designated props value
// const App = () => {
//   {/* 3.3.4 between tag -> children */}
//   // return <MyComponent>React</MyComponent>

//   {/* 3.3.6 verify through propTypes */}
//   {/* warning (console) */}
//   {/* isRequired warning */}
//   return <MyComponent name="re">verify</MyComponent>
// }

// 3.4 State
// const App = () => {
//   return <Counter/>
// }

// 3.4.2.2 useState
const App = () => {
  return <Say/>
}

export default App;
