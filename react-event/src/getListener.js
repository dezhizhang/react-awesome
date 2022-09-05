/*
 * :file description: 
 * :name: /react-event/src/getListener.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-06 06:47:45
 * :last editor: 张德志
 * :date last edited: 2022-09-06 06:51:35
 */

import { getFiberCurrentPropsFormNode } from "./ReactDOMComponentTree";


export default function getListener(fiberInst,registrationName) {
    const stateNode = fiberInst.stateNode;
    const props = getFiberCurrentPropsFormNode(stateNode);
    const listener = props[registrationName];
    return listener;
}