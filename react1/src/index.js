/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-23 05:29:19
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React from 'react';
import ReactDOM from 'react-dom';

function reducer(state = {number:0},action) {
    switch(action.type) {
        case 'ADD':
            return {number:state.number + 1};
        case 'MINUS':
            return {number:state.number - 1}
        default:
            return state
    }
}

function App() {
    const [state,dispatch] = React.useReducer(reducer,{number:0});
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => dispatch({type:'ADD'})}>+</button>
            <button onClick={() => dispatch({type:'MINUS'})}>-</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))

