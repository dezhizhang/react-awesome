/*
 * :file description: 
 * :name: /mobx1/src/main.jsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-07 16:51:07
 * :last editor: 张德志
 * :date last edited: 2022-08-07 19:48:39
 */
import React from "react";
import { createRoot } from 'react-dom/client';
import Container from './components/Container';

const root = createRoot(document.getElementById('root'));
root.render(
    <Container/>
)