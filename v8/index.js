/*
 * :file description: 
 * :name: /v8/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-25 20:30:38
 * :last editor: 张德志
 * :date last edited: 2022-09-25 21:45:44
 */

const readline = require('readline-sync');

(function mainThread() {
    while(true) {
        let num1 = readline.question('num1:');
        let num2 = readline.question('num2:');
        let result = parseFloat(num1) + parseFloat(num2);
        console.log(result);
        
    }
})()

