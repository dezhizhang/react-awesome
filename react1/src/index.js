/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-23 04:58:56
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React, { useState,memo } from 'react';
import ReactDOM from 'react-dom';

function Child({data,handleClick}) {
    console.log('Child render');
    return <button onClick={handleClick}>{data.number}</button>
}

const MemoChild = memo(Child);

function App() {
    console.log('App render');
    const [name, setName] = useState('zhang');
    const [number,setNumber] = useState(0);
    const data = React.useMemo(() => ({number}),[number])
    let handleClick = React.useCallback(() => setNumber(number + 1),[number]);

    return <div>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <MemoChild data={data} handleClick={handleClick}/>
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'));

