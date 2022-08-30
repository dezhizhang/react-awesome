/*
 * :file description: 
 * :name: /fiber/src/schedule.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-29 06:50:30
 * :last editor: 张德志
 * :date last edited: 2022-08-31 06:14:29
 */

import { ELEMENT_TEXT, TAG_HOST, TAG_ROOT, TAG_TEXT,PLACEMENT } from "./constants";
import { setProps } from './utils';
let nextUnitOfWork = null;
let workInProgressRoot = null;

export function scheduleRoot(rootFiber) {
    nextUnitOfWork = rootFiber;
    workInProgressRoot = rootFiber;

} 

function commitWork(currentFiber) {
    if(!currentFiber) return;
    let returnFiber = currentFiber.return;
    let returnDOM = returnFiber.stateNode;
    if(currentFiber.effectTag === PLACEMENT) {
        returnDOM.appendChild(currentFiber.stateNode);
    }
    currentFiber.effectTag = null;
}

function commitRoot() {
    let currentFiber =  workInProgressRoot.firstEffect;
    while(currentFiber) {
        commitWork(currentFiber);
        
        console.log('commitWork',currentFiber);
        currentFiber = currentFiber.nextEffect;
    }

    workInProgressRoot = null;
}

function workLoop(deadline) {
    let shouldYield = false;

    while(nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitofWork(nextUnitOfWork);
        shouldYield = deadline.timeRemaining() < 1;
    }
    if(!nextUnitOfWork && workInProgressRoot) {
       
       commitRoot();
    }
    requestIdleCallback(workLoop,{ timeout:500 });
}

requestIdleCallback(workLoop,{ timeout:500 });

function completeUnitOfWork(currentFiber) {
  let returnFiber = currentFiber.return;
  if(returnFiber) {
    if(!returnFiber.firstEffect) {
        returnFiber.firstEffect = currentFiber.firstEffect;
    }
    if(!!returnFiber.lastEffect) {
        if(!!returnFiber.lastEffect) {
            returnFiber.lastEffect.nextEffect = currentFiber.firstEffect;
        }
        returnFiber.lastEffect = currentFiber.lastEffect;
    }
    const effectTag = currentFiber.effectTag;
    if(effectTag) {
        if(returnFiber.lastEffect) {
            returnFiber.lastEffect.nextEffect = currentFiber;
        }else {
            returnFiber.firstEffect = currentFiber;
        }
        returnFiber.lastEffect = currentFiber;
    }
  }
}

function performUnitofWork(currentFiber) {
    beginWork(currentFiber);
    if(currentFiber.child) {
        return currentFiber.child;
    }
    
    while(currentFiber) {
        completeUnitOfWork(currentFiber);
        if(currentFiber.sibling) {
            return currentFiber.sibling;
        }
        currentFiber = currentFiber.return;
    }
}

function updateDOM(stateNode,oldProps,newProps) {
    setProps(stateNode,oldProps,newProps);
}

function createDOM(currentFiber) {
    if(currentFiber.tag === TAG_TEXT) {
        return document.createTextNode(currentFiber.props.text);
    }else if(currentFiber.tag === TAG_HOST) {
        let stateNode = document.createElement(currentFiber.type);
        updateDOM(stateNode,{},currentFiber.props)
        return stateNode;
    }
}



function updateHost(currentFiber) {
    if(!currentFiber.stateNode) {
        currentFiber.stateNode = createDOM(currentFiber);
    }
    const newChildren = currentFiber.props.children;
    reconcileChildren(currentFiber,newChildren);
}

function beginWork(currentFiber) {
    if(currentFiber.tag === TAG_ROOT) {
        updateHostRoot(currentFiber);
    }else if(currentFiber.tag === TAG_TEXT) {
        updateHostText(currentFiber);
    }else if(currentFiber.tag === TAG_HOST) {
        updateHost(currentFiber)
    }
}

function updateHostText(currentFiber) {
    if(!currentFiber.stateNode) {
        currentFiber.stateNode = createDOM(currentFiber);
    }
}

function updateHostRoot(currentFiber) {
    if(currentFiber.props && currentFiber.props.children) {
        let newChildren =  currentFiber.props.children;
        reconcileChildren(currentFiber,newChildren);
    }
}

function reconcileChildren(currentFiber,newChildren) {
    let newChildrenIndex = 0;
    let prevSibling;
    while(newChildrenIndex < newChildren.length) {
        let newChild = newChildren[newChildrenIndex];
        let tag;
        if(newChild.type === ELEMENT_TEXT) {
            tag = TAG_TEXT;
        }else if(typeof newChild.type === 'string') {
            tag = TAG_HOST;
        }
        let newFiber = {
            tag,
            type:newChild.type,
            props:newChild.props,
            stateNode:null,
            return:currentFiber,
            effectTag:PLACEMENT,
            nextEffect:null,
        }
        if(newChild) {
            if(newChildrenIndex ===0) {
                currentFiber.child = newFiber;
            }else {
                prevSibling.sibling = newFiber;
            }
            prevSibling = newFiber;
        }
        newChildrenIndex++;
    }
}
