/*
 * :file description: 
 * :name: /vite/lib/middlewares/static.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:48:01
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:58:35
 */

const static = require('serve-static')

function serverStaticMiddleware(config) {
    return static(config && config.root)
}

module.exports = serverStaticMiddleware;
