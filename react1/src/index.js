/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-20 06:26:45
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    state = {name:'Button'}
    componentDidMount() {
        console.log(' Button componentDidMount')
    }
    componentWillMount() {
        console.log('Button componentWillMount')
    }
    render() {
        return <button name={this.state.name} title={this.props.title}/>
    }
}


function counterWrapper(OlderComponent) {
    return class NewButton extends OlderComponent {
        state = {number:0}
        componentDidMount() {
            console.log('NewButton componentDidMount');
            super.componentDidMount();
            
        }
        componentWillMount() {
            console.log('NewButton componentWillMount');
            super.componentWillMount();
        }
        handleClick = () => {
            this.setState({number:this.state.number + 1});
        }
        render() {
            console.log('new Button render')
            const element = super.render();
            let newProps = {
                ...element.props,
                onClick:this.handleClick
            }
            return React.cloneElement(element,newProps,this.state.number)
        }
    }
}


const CounterButton = counterWrapper(Button);

ReactDOM.render(<CounterButton/>,document.getElementById('root'))