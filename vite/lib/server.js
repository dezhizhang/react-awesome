/*
 * :file description: 
 * :name: /vite/lib/server.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:23:53
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:30:35
 */
const connect = require('connect');
const http = require('http');

function createServer() {
    const middlewares  = connect();
    const server = {
        async listen(port) {
            http.createServer(middlewares).listen(port,() => {
                console.log(`server run in :http://localhost:${port}`)
            })
        }
    }
    return server
}

exports.createServer = createServer;