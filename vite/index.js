/*
 * :file description: 
 * :name: /vite/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 05:35:19
 * :last editor: 张德志
 * :date last edited: 2022-07-18 05:38:52
 */

const connect = require('connect');
const http = require('http');

const middlewares = connect();
middlewares.use((req,res,next) => {
    console.log('middlewares');
    next();
});

middlewares.use((req,res,next) => {
    console.log('middlewares2');
    next();
});

middlewares.use((req,res,next) => {
    console.log('middlewares3');
    next();
});

http.createServer(middlewares).listen(3000);
