/*
 * :file description: 
 * :name: /mobx1/src/main.jsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-07 16:51:07
 * :last editor: 张德志
 * :date last edited: 2022-08-07 17:04:21
 */
import { observable,autorun } from 'mobx';

let obj = {name:1};
let proxyObj = observable(obj);

autorun(() => {
    console.log(proxyObj.name);
})

proxyObj.name = 2;
proxyObj.name = 3;
