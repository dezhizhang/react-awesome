import { useLocalObservable,useObserver } from 'mobx-react';

export default function() {
    const store = useLocalObservable(() =>({
        number:1,
        add() {
            this.number++
        }
    }));
    return useObserver(() => (
        <div>
            <p>{store.number}</p>
            <button onClick={store.add}>+</button>
        </div>
    ))
}
