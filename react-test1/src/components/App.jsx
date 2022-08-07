/*
 * :file description: 
 * :name: /react-test1/src/components/App.jsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-08 06:18:54
 * :last editor: 张德志
 * :date last edited: 2022-08-08 06:26:07
 */

import * as React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import { dynamic } from '../utils/index';

const LazyHome = dynamic(() => import('./Home'));
const LazyUser = dynamic(() => import('./User'));

function App() {
    return    <div>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/user">user</Link></li>
        </ul>
    <Routes>
        <Route  path="/" element={<LazyHome/>} />
        <Route path="/user" element={<LazyUser/>} />
       
    </Routes>
  </div>
}

export default App;
