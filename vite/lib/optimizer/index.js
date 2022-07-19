/*
 * :file description: 
 * :name: /vite/lib/optimizer/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-19 06:07:24
 * :last editor: 张德志
 * :date last edited: 2022-07-20 06:46:11
 */

const scanImports = require('./scan');

async function createOptimizeDepsRun(config) {
    const deps = await scanImports(config);
    return deps;
    
}

exports.createOptimizeDepsRun = createOptimizeDepsRun;