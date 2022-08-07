/*
 * :file description: 
 * :name: /react-test1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 05:22:48
 * :last editor: 张德志
 * :date last edited: 2022-08-08 06:25:48
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);