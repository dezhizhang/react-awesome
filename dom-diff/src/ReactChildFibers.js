/*
 * :file description: 
 * :name: /dom-diff/src/ReactChildFibers.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-20 07:38:17
 * :last editor: 张德志
 * :date last edited: 2022-09-21 07:04:53
 */

import { REACT_ELEMENT_TYPE } from './ReactSymbols';
import { createFiberFromElement } from './ReactFilber';
import { Placement } from './ReactFiberFlag';

function childReconciler(shouldTrackSideEffects) {
    function placeSingleChild(newFiber) {
        if(shouldTrackSideEffects && !newFiber.alternate) {
            newFiber.flags = Placement;
        }
        return newFiber;
    }

    function reconcileSingleElement(returnFiber,currentFirstChild,element) {
        const created = createFiberFromElement(element);
        created.return = returnFiber;
        return created;
    }


    return function reconcileChildFibers(returnFiber,currentFirstChild,newChild) {
        const isObject = typeof newChild === 'object' && (newChild);
        if(isObject) {
            switch(newChild.$$typeof) {
                case REACT_ELEMENT_TYPE:
                    return placeSingleChild(
                        reconcileSingleElement(
                            returnFiber,currentFirstChild,newChild
                        ))
                    // return placeSingle;
                    default:
                        break;
            }
        }
    }
}


export const reconcileChildFibers = childReconciler(true);
