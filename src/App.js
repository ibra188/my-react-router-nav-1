import React, { Component }  from 'react';
import logo from './logo.jpg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='Nav_items'>
          <li className='Nav_link'>
            <Link to="/home"  className='Nav_list'>Home</Link>
            <Link to="/grafici"  className='Nav_list'>Grafici</Link>
            <Link to="/info"  className='Nav_list'>info</Link>
            <Link to="/resulti"  className='Nav_list'>Resulti</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
