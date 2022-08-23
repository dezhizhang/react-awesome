/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-24 04:32:19
 */
import React from "react";
import ReactDOM from "react-dom";


const conterContext = React.createContext()

function reducer(state={number:0},action) {
    switch(action.type) {
        case 'ADD':
            return {number:state.number + 1}
        case 'MINUS':
            return {number:state.number - 1}
        default:
        return state;
    }
}

function Counter() {
   const {state,dispatch} = React.useContext(conterContext)
    return (
        <div>
              <p>{state.number}</p>
        <button onClick={() =>dispatch({type:'ADD'})}>+</button>
        <button onClick={() =>dispatch({type:"MINUS"})}>-</button>
        </div>
      
    )
}

function App() {
    const [state,dispatch] = React.useReducer(reducer,{number:1})
    return (
        <conterContext.Provider value={{state,dispatch}}>
            <Counter/>
        </conterContext.Provider>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))

