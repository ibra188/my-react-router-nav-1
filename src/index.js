import React, { Component }  from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';

import Grafici from './grafici';
import Info from './info';
import Resulti from './resulti';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/grafici'  element={<Grafici />} />
      <Route path='info' element={<Info />} />
      <Route path='resulti' element={<Resulti />} />
    </Routes>
 </BrowserRouter>,
 rootElement
);
