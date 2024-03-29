/*
 * :file description: 
 * :name: /fiber/src/react-dom.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-29 06:37:32
 * :last editor: 张德志
 * :date last edited: 2022-08-31 06:12:01
 */
import { scheduleRoot } from './schedule';

import { TAG_ROOT } from "./constants";


function render(element,container) {
    let rootFiber = {
        tag:TAG_ROOT,
        props:{children:[element]},
        stateNode:container
    }

    scheduleRoot(rootFiber);

}


const ReactDOM = {
    render
}

export default ReactDOM;
