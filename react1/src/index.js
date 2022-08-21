/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-22 06:29:08
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React from 'react';
import ReactDOM from 'react-dom';

class Dialog extends React.Component{
    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
    }
    render() {
        return ReactDOM.createPortal(
            <div className='diallog'>{this.props.children}</div>,
            this.node
        )
    }
}
class App extends React.Component{
    render() {
        return <div><Dialog>模态框</Dialog></div>
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))