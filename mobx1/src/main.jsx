/*
 * :file description: 
 * :name: /mobx1/src/main.jsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-07 16:51:07
 * :last editor: 张德志
 * :date last edited: 2022-08-07 17:48:44
 */
import { observable,autorun,makeAutoObservable,flow,computed } from 'mobx';

// let obj = {name:1};
// let proxyObj = observable(obj);

// autorun(() => {
//     console.log(proxyObj.name);
// })

// proxyObj.name = 2;
// proxyObj.name = 3;

class Doubler {
    value
    constructor(value) {
        makeAutoObservable(this)
        this.value = value;
    }
    get doube() {
        return this.value *2;
    }
    *fetch() {
        let amout = yield new Promise((resolve) => setTimeout(() => resolve(5),1000));
        this.value += amout;
    }
}

const  doubler = new Doubler(1);
autorun(() => {
    console.log(doubler.value);
});
doubler.fetch();

