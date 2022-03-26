import React, { Component }  from 'react';
import {Outlet, Link} from "react-router-dom";
import logo from './logo.jpg';
import './App.css';


export default  function App() {
  return (
     <>
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='Nav_items'>
          <li className='Nav_link'>
            <Link to="/App"      className='Nav_list'>Home</Link>
            <Link to="/grafici"  className='Nav_list'>Grafici</Link>
            <Link to="/info"     className='Nav_list'>Info</Link>
            <Link to="/resulti"  className='Nav_list'>Resulti</Link>
          </li>
        </ul>
      </header>
      <main className='homewrapper'>
         <h1>Home Page</h1>
      </main>
      <Outlet />
    </div>
    </>
  );
};
