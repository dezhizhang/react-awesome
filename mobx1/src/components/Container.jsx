
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