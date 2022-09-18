/*
 * :file description: 
 * :name: /dom-diff/src/react-dom.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 06:21:53
 * :last editor: 张德志
 * :date last edited: 2022-09-18 11:17:41
 */

import { createFiberRoot } from './ReactFiberRoot';
import { updateContainer } from './ReactFiberReconciler';
function render(element,container) {
    const fiberRoot = createFiberRoot(container);
    updateContainer(element,fiberRoot);
}

const ReactDOM = {
    render
}

export default ReactDOM;

