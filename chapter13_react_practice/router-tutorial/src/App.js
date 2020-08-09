import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  // return(
  //   <div>
  //     {/* 13.2.4 Specific address connect .. with Route Component */}
  //     {/* use exact props */}
  //     <Route path="/" component={Home} exact={true}/>
  //     <Route path="/about" component={About}/>
  //   </div>
  // );

  // 13.2.5 move other address use Link Component
  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">Introduce</Link>
  //       </li>
  //     </ul>
  //     <hr/>
  //     <Route path="/" component={Home} exact={true}/>
  //     {/* <Route path="/About" component={About}/> */}
  //     {/* 13.3 multi path setting in one Route */}
  //     {/* array in props path */}
  //     <Route path={['/about', '/info']} component={About}/>
  //   </div>
  // )

  // 13.4 URL Parameter & Query
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Introduce</Link>
        </li>
        <li>
          <Link to="/profile/gayoung">GaYoung Profile</Link>
        </li>
        <li>
          <Link to="/profile/seunghun">SeungHun Profile</Link>
        </li>
        <li>
          <Link to="/profile/somang">Somang Profile</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;