/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-14 09:52:33
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React from './react';
import ReactDOM from './react-dom';



function FunctionComponent(props) {
    return <h1 className='title' style={{color:'red'}}>{props.name}</h1>
}

class ClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number:0
        }
    }
    handleClick = () => {
        this.setState({number:this.state.number + 1});
        console.log(this.state);
        this.setState({number:this.state.number + 1});
        console.log(this.state);

        setTimeout(() => {
            this.setState({number:this.state.number + 1});
            console.log(this.state);
            this.setState({number:this.state.number + 1});
            console.log(this.state);
            
        },50)
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}



let element = <ClassComponent name="hello world" />
console.log('elem',element);
ReactDOM.render(element,document.getElementById('root'))
