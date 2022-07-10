# mobx

```js
import { observable,observe } from 'mobx';
// const o1 = observable({name:'hello'});

// let p1 = new Proxy({name:'hello'})

// console.log(o1);

let num = observable.box(1);
observe(num,c => console.log(c));

console.log(num.get());
num.set(2);

```