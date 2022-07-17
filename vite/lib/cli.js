/*
 * :file description: 
 * :name: /vite/lib/cli.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:14:09
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:30:23
 */

const { createServer } = require('./server');

(async function(){
    const server = await createServer();
    server.listen(8000);
})();