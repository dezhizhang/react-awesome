### 新生命周期getDerivedStateFromProps
```js
 static getDerivedStateFromProps(nextProps,prevState) {
    const { number } = nextProps;
    if(number %2) {
        return {count:number *2};
    }else {
        return {count:number + 1}
    }
}
```
### getSnapshotBeforeUpdate
```js
getSnapshotBeforeUpdate() {
    return {
        prevScrollTop:this.wrapper.current.scrollTop,
        prevScrollHeight:this.wrapper.current.scrollHeight,
    }
}
```
### 高阶函数
```js
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
```
### createPortal
```js
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
            this.node,
        )
    }
}

class App extends React.Component{
    render() {
        return <div><Dialog>模态框</Dialog></div>
    }
}


ReactDOM.render(<App/>,document.getElementById('root'))
```
###  React.useMemo和React.memo，React.useCallback缓存数据
```js
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

```


