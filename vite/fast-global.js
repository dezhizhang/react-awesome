/*
 * :file description: 
 * :name: /vite/fast-global.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-18 06:09:16
 * :last editor: 张德志
 * :date last edited: 2022-07-18 06:11:10
 */


const fastGlob = require('fast-glob');



(async function() {
    const entries = await fastGlob(['**/*.js']);
    console.log(entries);
    
})()