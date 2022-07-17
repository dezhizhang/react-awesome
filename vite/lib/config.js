/*
 * :file description: 
 * :name: /vite/lib/config.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:50:38
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:54:54
 */

const { normalizePath } = require('./utils');

 function resolveConfig() {
    const root = normalizePath(process.cwd());
    const config = {
        root
    }

    return config;
}

module.exports = resolveConfig;
