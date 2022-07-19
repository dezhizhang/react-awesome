/*
 * :file description: 
 * :name: /vite/lib/server.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:23:53
 * :last editor: 张德志
 * :date last edited: 2022-07-20 06:45:07
 */
const http = require('http');
const connect = require('connect');
const serverStaticMiddleware = require('./middlewares/static')
const resolveConfig = require('./config')
const { createOptimizeDepsRun } = require('./optimizer');

async function createServer() {
    const config = await resolveConfig();
    const middlewares  = connect();
    const server = {
        async listen(port) {
            await runOptimize(config);
            http.createServer(middlewares).listen(port,() => {
                console.log(`server run in :http://localhost:${port}`)
            })
        }
    }
    middlewares.use(serverStaticMiddleware(config))
    return server
}

async function runOptimize(config) {
    await createOptimizeDepsRun(config);
}

exports.createServer = createServer;