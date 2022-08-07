
```js
class Doubler {
    value
    constructor(value) {
        makeAutoObservable(this,{
            value:observable
        })
        this.value = value;
    }
    get doube() {
        return this.value *2;
    }
}

const  doubler = new Doubler(1);
autorun(() => {
    console.log(doubler.value);
});

doubler.value = 2;
```
### 计算属性
```js
class Doubler {
    value
    constructor(value) {
        makeAutoObservable(this,{
            value:observable,
            doube:computed
        })
        this.value = value;
    }
    get doube() {
        return this.value *2;
    }
    *fetch() {
        let amout = yield new Promise((resolve) => setTimeout(() => resolve(5),1000));
        this.value = value;
    }
}

const  doubler = new Doubler(1);
autorun(() => {
    console.log(doubler.value);
});

doubler.value = 2;

console.log(doubler.doube)
```
### 异步请求
```js
class Doubler {
    value
    constructor(value) {
        makeAutoObservable(this,{
            value:observable,
            doube:computed,
            fetch:flow
        })
        this.value = value;
    }
    get doube() {
        return this.value *2;
    }
    // 异步请求
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
```
### react-mobx
```js
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Store{
    number = 1;
    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
    }
    add() {
        this.number++;
    }
}

const store = new Store();

export default observer(function() {
    console.log(store);
    return <div>

        <p>{store.number}</p>
        <button onClick={store.add}>+</button>
    </div>
})
```
