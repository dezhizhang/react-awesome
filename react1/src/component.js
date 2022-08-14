/*
 * :file description: 
 * :name: /react1/src/component.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-14 05:24:51
 * :last editor: 张德志
 * :date last edited: 2022-08-14 09:14:47
 */

import { findDOM,compareTwoVdom } from './react-dom';

export let updateQueue = {
    isBathingUpdate:false, // 是否是批量更新
    updates:new Set(),
    batchUpdate() {
        updateQueue.isBathingUpdate = false;
        for(let updater of updateQueue.updates) {
            updater.updateComponent();
        }
        updateQueue.updates.clear();

    }
}

class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance;
        this.pendingStates = [];
    }
    addState(partialState) {
        this.pendingStates.push(partialState);
        this.emitUpdate();
    }
    emitUpdate() {
        if(updateQueue.isBathingUpdate) {
            updateQueue.updates.add(this);
        }else {
            this.updateComponent();
        }
       
    }
    updateComponent() {
        const { classInstance,pendingStates } = this;
        if(pendingStates.length > 0) {
            shouldUpdate(classInstance,this.getState())
        }
    }
    getState() {
        let newState = {}
        const { classInstance,pendingStates } = this;
        const { state } = classInstance;
        pendingStates.forEach((nextState) => {
            newState = {...state,nextState}
        });
        pendingStates.length = 0;
        return newState;
    }
}


function shouldUpdate(classInstance,nextState) {
    classInstance.state = nextState;
    classInstance.forceUpdate();
}


export class Component{
    static isReactComponent = true
    constructor(props) {
        this.props = props;
        this.state = {};
        this.updater = new Updater(this)
    }
    setState(partialState) {
        this.updater.addState(partialState);
    }
    forceUpdate() {
        let oldRenderVdom = this.oldRenderVdom;
        let oldDOM = findDOM(oldRenderVdom);
        let newRenderVdom = this.render();
        console.log('newRenderVdom',newRenderVdom)
        compareTwoVdom(oldDOM.parentNode,oldRenderVdom,newRenderVdom);
        this.oldRenderVdom = newRenderVdom;
    }
}

