import React, { Component }  from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';



export default info;  function info(){
 return(
    <> 
       <div className='App'>
           <header className='App-header'>
               <img src={logo} className="App-logo" alt='log' />
               <ul className='Nav-items'>
                   <li className='Nav-links'>
                       <Link to="/home" className='Nav_list'>Home</Link>
                       <Link to="/grafici" className='Nav_list'>Grafici</Link>
                       <Link to="/info" className='Nav_list'>Info</Link>
                       <Link to="/resulti" className='Nav_list'>Resulti</Link>
                   </li>
               </ul>
           </header>
           <main className="inforwrappers">
               <h2>Info Page</h2>
            </main>
            <Outlet />
       </div>
    </>
);
};