/*
 * :file description: 
 * :name: /vite/lib/utils.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:52:53
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:59:19
 */


function normalizePath(path) {
    return path && path.replace(/\\/g,'/')
}


exports.normalizePath = normalizePath;
